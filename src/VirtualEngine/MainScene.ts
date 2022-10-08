/* eslint-disable no-new */
/* eslint-disable @typescript-eslint/no-this-alias */
import type {
  AbstractMesh,
  Mesh,
  StandardMaterial,
} from 'babylonjs'
import {

  ArcRotateCamera,

  Color3,
  Color4,
  DirectionalLight,
  Engine,
  HemisphericLight,
  MeshBuilder,
  Scene,
  SceneLoader,

  Vector3,
} from 'babylonjs'

import 'babylonjs-loaders'
import { CharacterController } from 'babylonjs-charactercontroller'
import { GroundCtr } from './GroundCtr'
import { OnlineEntities } from './OnlineEntitites'
export class MainScene {
  scene: Scene
  engine: Engine
  mainPlayer: AbstractMesh | undefined | unknown
  camera: ArcRotateCamera

  constructor(private canvas: HTMLCanvasElement, user: string) {
    console.log('loged user', user)
    this.engine = new Engine(this.canvas, true)
    this.scene = new Scene(this.engine)
    const gravityVector = new Vector3(0, -9.81, 0)
    // var physics = new AmmoJSPlugin()
    // this.scene.enablePhysics(gravityVector, physics)
    this.scene.gravity = gravityVector
    new GroundCtr(this.scene)
    this.scene.clearColor = new Color4(0.75, 0.75, 0.75, 1)
    this.scene.ambientColor = new Color3(1, 1, 1)

    const light = new HemisphericLight('light1', new Vector3(0, 1, 0), this.scene)
    light.intensity = 0.3

    const light2 = new DirectionalLight(
      'light2',
      new Vector3(-1, -1, -1),
      this.scene,
    )
    light2.position = new Vector3(0, 128, 0)
    light2.intensity = 0.7

    const steps = MeshBuilder.CreateBox(
      'Steps',
      { width: 5, height: 0.25, depth: 5 },
      this.scene,
    )
    steps.position = new Vector3(0, 6.25, 5)
    steps.checkCollisions = true
    const that = this
    // rotate the camera behind the player
    const alpha = 12 - 4.69
    const beta = Math.PI / 2.5
    const target = new Vector3(0, 12 + 1.5, 0)
    this.camera = new ArcRotateCamera(
      'ArcRotateCamera',
      alpha,
      beta,
      5,
      target,
      this.scene,
    )
    // standard camera setting
    this.camera.wheelPrecision = 15
    this.camera.checkCollisions = false
    // make sure the keyboard keys controlling camera are different from those controlling player
    // here we will not use any keyboard keys to control camera
    this.camera.keysLeft = []
    this.camera.keysRight = []
    this.camera.keysUp = []
    this.camera.keysDown = []
    // how close can the camera come to player
    this.camera.lowerRadiusLimit = 2
    // how far can the camera go from the player
    this.camera.upperRadiusLimit = 10
    this.camera.attachControl(this.canvas, false)

    this.loadPlayer(this.scene).then((res) => {
      this.mainPlayer = res
      // let CharacterController = org.ssatguru.babylonjs.component.CharacterController;
      const cc = new CharacterController(
        <Mesh> this.mainPlayer,
        this.camera,
        this.scene,
      )
      // below makes the controller point the camera at the player head which is approx
      // 1.5m above the player origin
      cc.setCameraTarget(new Vector3(0, 1.5, 0))

      // if the camera comes close to the player we want to enter first person mode.
      cc.setNoFirstPerson(false)
      // the height of steps which the player can climb
      cc.setStepOffset(0.4)
      // the minimum and maximum slope the player can go up
      // between the two the player will start sliding down if it stops
      cc.setSlopeLimit(30, 60)
      // tell controller
      // - which animation range should be used for which player animation
      // - rate at which to play that animation range
      // - wether the animation range should be looped
      // use this if name, rate or looping is different from default
      cc.setIdleAnim('idle', 1, true)
      cc.setTurnLeftAnim('turnLeft', 0.5, true)
      cc.setTurnRightAnim('turnRight', 0.5, true)
      cc.setWalkBackAnim('walkBack', 0.5, true)
      cc.setIdleJumpAnim('idleJump', 0.5, false)
      cc.setRunJumpAnim('runJump', 0.6, false)
      // set the animation range name to "null" to prevent the controller from playing
      // a player animation.
      // here even though we have an animation range called "fall" we donot want to play
      // the fall animation
      cc.setFallAnim('', 2, false)
      cc.setSlideBackAnim('slideBack', 1, false)

      cc.start()
    })

    window.addEventListener('resize', () => {
      that.engine.resize()
    })
    const players: any[] = [
      {
        pos: new Vector3(
          -41.64399195570207,
          0.009999999965013995,
          32.96276598970241,
        ),
      },
      {
        pos: new Vector3(
          -13.989355562410074,
          7.151173751076989,
          26.546646243989354,
        ),
      },
      {
        pos: new Vector3(0, 12, 35),
      },
    ]
    new OnlineEntities(this.scene, players)
    this.scene.onPointerDown = (evt) => {
      if (evt.button === 0)
        this.engine.enterPointerlock()
      if (evt.button === 1)
        this.engine.exitPointerlock()
    }

    // run engine loop
    this.engine.runRenderLoop(() => {
      // const mainOG = this.scene.getMeshByName('sosa')
      // console.log('🚀 mainOG - position', mainOG?.position)
      this.scene.render()
    })
  }

  async loadPlayer(scene: Scene) {
    try {
      const data = await SceneLoader.ImportMeshAsync(
        'Vincent',
        '/assets/player/',
        'Vincent.babylon',
        scene,
      )
      const player = data.meshes[0]
      const skeleton = data.skeletons[0]
      player.skeleton = skeleton

      skeleton.enableBlending(0.1)
      // if the skeleton does not have any animation ranges then set them as below

      const sm = <StandardMaterial>player.material
      if (sm.diffuseTexture != null) {
        sm.backFaceCulling = true
        sm.ambientColor = new Color3(1, 1, 1)
      }

      player.position = new Vector3(0, 12, 0)
      player.checkCollisions = true
      player.ellipsoid = new Vector3(0.5, 1, 0.5)
      player.ellipsoidOffset = new Vector3(0, 1, 0)
      player.name = 'sosa'
      return player
    }
    catch (error) {
      console.log('data error data', error)
      return error
    }
  }
}
