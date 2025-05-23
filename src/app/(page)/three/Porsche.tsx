/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Karol Miklas (https://sketchfab.com/karolmiklas)
License: CC-BY-SA-4.0 (http://creativecommons.org/licenses/by-sa/4.0/)
Source: https://sketchfab.com/3d-models/free-porsche-911-carrera-4s-d01b254483794de3819786d93e0e1ebf
Title: (FREE) Porsche 911 Carrera 4S
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
    nodes: {
        window_rear_0: THREE.Mesh
        windshield_0: THREE.Mesh
        windshield_1: THREE.Mesh
        Plane002_0: THREE.Mesh
        Plane003_0: THREE.Mesh
        Plane004_0: THREE.Mesh
        boot_0: THREE.Mesh
        underbody_0: THREE.Mesh
        Cylinder000_0: THREE.Mesh
        Cylinder000_1: THREE.Mesh
        Cylinder000_2: THREE.Mesh
        Cylinder000_3: THREE.Mesh
        Plane_0: THREE.Mesh
        Cube001_0: THREE.Mesh
        bumper_front004_0: THREE.Mesh
        bumper_front004_1: THREE.Mesh
        bumper_front004_2: THREE.Mesh
        bumper_front007_0: THREE.Mesh
        bumper_front009_0: THREE.Mesh
        bumper_front001_0: THREE.Mesh
        bumper_front001_1: THREE.Mesh
        bumper_front001_2: THREE.Mesh
        bumper_front003_0: THREE.Mesh
        bumper_front003_1: THREE.Mesh
        boot001_0: THREE.Mesh
        boot002_0: THREE.Mesh
        Plane001_0: THREE.Mesh
        boot003_0: THREE.Mesh
        boot004_0: THREE.Mesh
        Cylinder001_0: THREE.Mesh
        Cylinder001_1: THREE.Mesh
        Cylinder001_2: THREE.Mesh
        Cylinder001_3: THREE.Mesh
        boot005_0: THREE.Mesh
        boot006_0: THREE.Mesh
        window_rear001_0: THREE.Mesh
        boot007_0: THREE.Mesh
        Plane005_0: THREE.Mesh
        Plane006_0: THREE.Mesh
        boot008_0: THREE.Mesh
        boot009_0: THREE.Mesh
        boot010_0: THREE.Mesh
        boot011_0: THREE.Mesh
        boot011_0_1: THREE.Mesh
        Cube002_0: THREE.Mesh
    }
    materials: {
        window: THREE.MeshPhysicalMaterial
        plastic: THREE.MeshStandardMaterial
        paint: THREE.MeshStandardMaterial
        full_black: THREE.MeshStandardMaterial
        silver: THREE.MeshPhysicalMaterial
        rubber: THREE.MeshStandardMaterial
        ['Material.001']: THREE.MeshPhysicalMaterial
        Material: THREE.MeshStandardMaterial
        lights: THREE.MeshPhysicalMaterial
        glass: THREE.MeshPhysicalMaterial
        tex_shiny: THREE.MeshPhysicalMaterial
        logo: THREE.MeshStandardMaterial
        license: THREE.MeshStandardMaterial
        coat: THREE.MeshStandardMaterial
    }
}

export function Porsche(props: React.JSX.IntrinsicElements['group']) {
    const { nodes, materials } = useGLTF('/model/free_porsche_911_carrera_4s.glb') as unknown as GLTFResult
    return (
        <group {...props} dispose={null}>
            <ambientLight intensity={15} />
            <group
                position={[-0.01528517, -0.00915591, 0.06289219]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.57842553}>
                <group position={[0, -0.00319, 0.00719]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.windshield_0.geometry}
                        material={materials.window}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.windshield_1.geometry}
                        material={materials.plastic}
                    />
                </group>
                <group position={[0, 0, 0.02935]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder000_0.geometry}
                        material={materials.silver}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder000_1.geometry}
                        material={materials.plastic}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder000_2.geometry}
                        material={materials.rubber}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder000_3.geometry}
                        material={materials['Material.001']}
                    />
                </group>
                <group position={[0, 0, 0.02935]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder001_0.geometry}
                        material={materials.silver}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder001_1.geometry}
                        material={materials.plastic}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder001_2.geometry}
                        material={materials.rubber}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder001_3.geometry}
                        material={materials['Material.001']}
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.window_rear_0.geometry}
                    material={materials.window}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane002_0.geometry}
                    material={materials.paint}
                    position={[-1.05305, 3.51025, -0.1259]}
                    rotation={[-1.43896619, -0.6197465, 0.77532862]}
                    scale={[0.0244268, 0.02442804, 0.02442647]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane003_0.geometry}
                    material={materials.paint}
                    position={[0.43627, 3.72335, -0.11696]}
                    rotation={[-1.48326895, 0.10488614, 0.80317316]}
                    scale={[0.02442387, 0.0244295, 0.0244272]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane004_0.geometry}
                    material={materials.paint}
                    position={[-0.48751, 3.68437, -0.32849]}
                    rotation={[-1.41508209, -0.04481156, 0.80246704]}
                    scale={[0.05913027, 0.05913292, 0.0591339]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.boot_0.geometry}
                    material={materials.full_black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.underbody_0.geometry}
                    material={materials.full_black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane_0.geometry}
                    material={materials.Material}
                    position={[0, 0, -1.05402]}
                    scale={[6.9534, 9.78514, 7.49598]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_0.geometry}
                    material={materials.plastic}
                    position={[0.03582, -1.56003, 0.33303]}
                    rotation={[0.70900411, -0.07066189, -0.24496534]}
                    scale={[0.01426, 0.01425743, 0.0119012]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bumper_front004_0.geometry}
                    material={materials.silver}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bumper_front004_1.geometry}
                    material={materials.lights}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bumper_front004_2.geometry}
                    material={materials.plastic}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bumper_front007_0.geometry}
                    material={materials.glass}
                    rotation={[-0.00605369, 0, 0]}
                    scale={[1.03574, 1.03573898, 1.03573898]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bumper_front009_0.geometry}
                    material={materials.tex_shiny}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bumper_front001_0.geometry}
                    material={materials.plastic}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bumper_front001_1.geometry}
                    material={materials.silver}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bumper_front001_2.geometry}
                    material={materials.lights}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bumper_front003_0.geometry}
                    material={materials.plastic}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bumper_front003_1.geometry}
                    material={materials.glass}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.boot001_0.geometry}
                    material={materials.paint}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.boot002_0.geometry}
                    material={materials.paint}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane001_0.geometry}
                    material={materials.tex_shiny}
                    position={[0.00535, 3.58116, 0.10747]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.boot003_0.geometry}
                    material={materials.tex_shiny}
                    position={[0, 0.00264, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.boot004_0.geometry}
                    material={materials.window}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.boot005_0.geometry}
                    material={materials.paint}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.boot006_0.geometry}
                    material={materials.full_black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.window_rear001_0.geometry}
                    material={materials.full_black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.boot007_0.geometry}
                    material={materials.logo}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane005_0.geometry}
                    material={materials.license}
                    position={[0, 3.70428, -0.29221]}
                    rotation={[0.11379079, 0, 0]}
                    scale={[0.39334, 0.39334356, 0.35561004]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane006_0.geometry}
                    material={materials.license}
                    position={[0, -3.75033, -0.43239]}
                    rotation={[0.08161831, 0, Math.PI]}
                    scale={[0.39521, 0.39520559, 0.35729944]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.boot008_0.geometry}
                    material={materials.paint}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.boot009_0.geometry}
                    material={materials.silver}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.boot010_0.geometry}
                    material={materials.plastic}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.boot011_0.geometry}
                    material={materials.coat}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.boot011_0_1.geometry}
                    material={materials.coat}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube002_0.geometry}
                    material={materials.full_black}
                    scale={[0.33232, 0.31787, 0.31787]}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/model/free_porsche_911_carrera_4s.glb')
