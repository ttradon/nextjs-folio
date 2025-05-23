/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Amvall (https://sketchfab.com/Amvall.Vall)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/spy-hypersport-158b48d550144451a59731720f63650a
Title: SPY-HYPERSPORT
*/

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
        Object_6: THREE.Mesh
        Object_7: THREE.Mesh
        Object_8: THREE.Mesh
        Object_9: THREE.Mesh
        Object_10: THREE.Mesh
        Object_11: THREE.Mesh
        Object_12: THREE.Mesh
        Object_13: THREE.Mesh
        Object_14: THREE.Mesh
        Object_15: THREE.Mesh
        Object_16: THREE.Mesh
        Object_17: THREE.Mesh
        Object_18: THREE.Mesh
        Object_19: THREE.Mesh
        Object_20: THREE.Mesh
        Object_21: THREE.Mesh
        Object_22: THREE.Mesh
        Object_23: THREE.Mesh
        Object_24: THREE.Mesh
        Object_25: THREE.Mesh
    }
    materials: {
        bike_lowblinn10SG: THREE.MeshStandardMaterial
        bike_lowblinn11SG: THREE.MeshStandardMaterial
        bike_lowblinn12SG: THREE.MeshStandardMaterial
        bike_lowblinn6SG: THREE.MeshStandardMaterial
        bike_lowblinn7SG: THREE.MeshStandardMaterial
        bike_lowblinn8SG: THREE.MeshStandardMaterial
        bike_lowblinn9SG: THREE.MeshStandardMaterial
    }
}

export function Motor(props: React.JSX.IntrinsicElements['group']) {
    const { nodes, materials } = useGLTF('/model/spy-hypersport.glb') as unknown as GLTFResult
    return (
        <group {...props} dispose={null}>
            <ambientLight intensity={-0.1} />

            <group rotation={[-Math.PI / 2, 0, 0]} scale={0.012}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_2.geometry}
                    material={materials.bike_lowblinn10SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3.geometry}
                    material={materials.bike_lowblinn11SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials.bike_lowblinn11SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_5.geometry}
                    material={materials.bike_lowblinn11SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_6.geometry}
                    material={materials.bike_lowblinn11SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_7.geometry}
                    material={materials.bike_lowblinn11SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_8.geometry}
                    material={materials.bike_lowblinn11SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_9.geometry}
                    material={materials.bike_lowblinn11SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_10.geometry}
                    material={materials.bike_lowblinn11SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_11.geometry}
                    material={materials.bike_lowblinn11SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_12.geometry}
                    material={materials.bike_lowblinn11SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_13.geometry}
                    material={materials.bike_lowblinn11SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_14.geometry}
                    material={materials.bike_lowblinn12SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_15.geometry}
                    material={materials.bike_lowblinn12SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_16.geometry}
                    material={materials.bike_lowblinn12SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_17.geometry}
                    material={materials.bike_lowblinn12SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_18.geometry}
                    material={materials.bike_lowblinn12SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_19.geometry}
                    material={materials.bike_lowblinn12SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_20.geometry}
                    material={materials.bike_lowblinn6SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_21.geometry}
                    material={materials.bike_lowblinn6SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_22.geometry}
                    material={materials.bike_lowblinn7SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_23.geometry}
                    material={materials.bike_lowblinn8SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_24.geometry}
                    material={materials.bike_lowblinn8SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_25.geometry}
                    material={materials.bike_lowblinn9SG}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/model/spy-hypersport.glb')
