import type {
  Scene,
  StandardMaterial,
} from 'babylonjs'
import {
  Color3,
  SceneLoader,
  Vector3,
} from 'babylonjs'
import 'babylonjs-loaders'

export class CharacterCtr {
  constructor(scene: Scene, position: Vector3) {
    this.loadPlayer(scene, position)
  }

  async loadPlayer(scene: Scene, position: Vector3) {
    const player = await SceneLoader.ImportMesh(
      '',
      '/assets/player/',
      'Vincent.babylon',
      scene,
      (meshes, particleSystems, skeletons) => {
        const player = meshes[0]
        const skeleton = skeletons[0]
        player.skeleton = skeleton

        skeleton.enableBlending(0.1)
        // if the skeleton does not have any animation ranges then set them as below

        const sm = <StandardMaterial>player.material
        if (sm.diffuseTexture != null) {
          sm.backFaceCulling = true
          sm.ambientColor = new Color3(1, 1, 1)
        }

        player.position = position
        player.checkCollisions = true
        player.ellipsoid = new Vector3(0.5, 1, 0.5)
        player.ellipsoidOffset = new Vector3(0, 1, 0)
        console.log('player loaded', player)
        return player
      },
    )
    return player
  }
}
