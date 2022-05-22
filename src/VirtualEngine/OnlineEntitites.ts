import {
  Scene,
  Color3,
  Vector3,
  SceneLoader,
  StandardMaterial,
  PhysicsImpostor,
} from 'babylonjs'
import 'babylonjs-loaders'
export class OnlineEntities {
  constructor(public scene: Scene, players: any) {
    this.loadPlayers(scene, players)
  }

  loadPlayers(scene: Scene, players: any[]) {
    players.forEach(async (player: any) => {
      SceneLoader.ImportMesh(
        '',
        '/assets/player/',
        'Vincent.babylon',
        scene,
        (meshes, particleSystems, skeletons) => {
          let avatar = meshes[0]
          let skeleton = skeletons[0]
          avatar.skeleton = skeleton
          avatar.checkCollisions = true

          skeleton.enableBlending(0.1)
          //if the skeleton does not have any animation ranges then set them as below

          let sm = <StandardMaterial>avatar.material
          if (sm.diffuseTexture != null) {
            sm.backFaceCulling = true
            sm.ambientColor = new Color3(1, 1, 1)
          }

          avatar.position = player.pos
          avatar.checkCollisions = true
          avatar.ellipsoid = new Vector3(0.5, 1, 0.5)
          avatar.ellipsoidOffset = new Vector3(0, 1, 0)
          avatar.skeleton.beginAnimation('idle', true)

          // avatar.physicsImpostor = new PhysicsImpostor(
          //   avatar,
          //   PhysicsImpostor.MeshImpostor,
          //   { mass: 1, restitution: 0 },
          //   scene
          // )
        }
      )
    })
  }
}
