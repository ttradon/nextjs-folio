import * as THREE from 'three';
import React from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Group18985_default_0: THREE.Mesh;
    Box002_default_0: THREE.Mesh;
    Object001_default_0: THREE.Mesh;
  };
  materials: {
    ['default']: THREE.MeshBasicMaterial;
  };
};

export function Shiba(props: React.JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/model/shiba.glb') as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Group18985_default_0.geometry}
        material={materials['default']}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box002_default_0.geometry}
        material={materials['default']}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object001_default_0.geometry}
        material={materials['default']}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

// preload ใช้ path ที่ถูกต้อง
useGLTF.preload('/model/shiba.glb');
