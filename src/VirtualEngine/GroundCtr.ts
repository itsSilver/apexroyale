import type { Scene } from 'babylonjs'
import {
  Color3,
  MeshBuilder,
  StandardMaterial,
  Texture,
} from 'babylonjs'
import 'babylonjs-loaders'

export class GroundCtr {
  constructor(scene: Scene) {
    this.createGround(scene)
  }

  createGround(scene: Scene) {
    const groundMaterial = this.createGroundMaterial(scene)
    MeshBuilder.CreateGroundFromHeightMap(
      'ground',
      '/assets/ground/ground_heightMap.png',
      {
        width: 128,
        height: 128,
        minHeight: 0,
        maxHeight: 10,
        subdivisions: 32,
        onReady: (grnd) => {
          grnd.material = groundMaterial
          grnd.checkCollisions = true
          grnd.isPickable = true
          grnd.freezeWorldMatrix()
        },
      },
      scene,
    )
  }

  createGroundMaterial(scene: Scene) {
    const groundMaterial = new StandardMaterial('groundMat', scene)
    const diffuseTexture: Texture = new Texture('/assets/ground/ground.jpg', scene)
    diffuseTexture.uScale = 4.0
    diffuseTexture.vScale = 4.0
    groundMaterial.diffuseTexture = diffuseTexture

    const bumpTexture = new Texture('/assets/ground/ground-normal.png', scene)
    bumpTexture.uScale = 12.0
    bumpTexture.vScale = 12.0
    groundMaterial.bumpTexture = bumpTexture

    groundMaterial.diffuseColor = new Color3(0.9, 0.6, 0.4)
    groundMaterial.specularColor = new Color3(0, 0, 0)

    return groundMaterial
  }
}
