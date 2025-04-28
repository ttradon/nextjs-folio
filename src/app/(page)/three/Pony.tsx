import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh
    Object_3: THREE.Mesh
    Object_4: THREE.Mesh
    Object_5: THREE.Mesh
  }
  materials: {
    Body_SG1: THREE.MeshStandardMaterial
    Ground_SG: THREE.MeshStandardMaterial
    Interior_SG: THREE.MeshStandardMaterial
    Windows_SG: THREE.MeshStandardMaterial
  }
}

export function Pony(props: React.JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/model/pony_cartoon.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <ambientLight intensity={3} />
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.004}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Body_SG1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.Ground_SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Interior_SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.Windows_SG}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/model/pony_cartoon.glb')