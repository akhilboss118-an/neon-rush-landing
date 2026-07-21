import { useRef, useEffect } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'
import * as THREE from 'three'
import { Environment } from '@react-three/drei'

interface CharacterModelProps {
  modelPath: string
  scale?: number
  position?: [number, number, number]
  rotation?: [number, number, number]
}

export default function CharacterModel({
  modelPath,
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
}: CharacterModelProps) {
  const meshRef = useRef<THREE.Group>(null)
  const mixerRef = useRef<THREE.AnimationMixer | null>(null)
  const fbx = useLoader(FBXLoader, modelPath)

  useEffect(() => {
    if (!fbx) return

    fbx.scale.setScalar(scale)
    fbx.position.set(position[0], position[1], position[2])
    fbx.rotation.set(rotation[0], rotation[1], rotation[2])

    fbx.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true
        if (!child.material) {
          child.material = new THREE.MeshStandardMaterial({
            color: 0x00f0ff,
            metalness: 0.3,
            roughness: 0.7,
          })
        }
      }
    })

    const mixer = new THREE.AnimationMixer(fbx)
    mixerRef.current = mixer

    if (fbx.animations.length > 0) {
      const action = mixer.clipAction(fbx.animations[0])
      action.play()
    }

    if (meshRef.current) {
      meshRef.current.add(fbx)
    }

    return () => {
      mixer.stopAllAction()
      if (meshRef.current) {
        meshRef.current.remove(fbx)
      }
    }
  }, [fbx, scale, position, rotation])

  useFrame((_, delta) => {
    mixerRef.current?.update(delta)
  })

  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
      <directionalLight position={[-5, 2, -5]} intensity={0.4} color="#00f0ff" />
      <pointLight position={[0, 3, 2]} intensity={0.8} color="#ff00aa" />
      <group ref={meshRef} />
    </>
  )
}
