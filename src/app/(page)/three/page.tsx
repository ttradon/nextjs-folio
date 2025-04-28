"use client"
import { Environment, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Shiba } from "./Shiba"
import { Pony } from "./Pony"
import Link from "next/link"
import { AiFillHome } from "react-icons/ai"
import Image from "next/image"
import { useState } from "react"
import { Porsche } from "./Porsche"
import { DirectionalLight } from "three"
import { Camera } from "./Camera"
import { Motor } from "./Motor."

const item = [
    { obj: <Shiba scale={2} position={[0,0.8,0]} key={1} />, id: 1 },
    { obj: <Pony scale={1.2} position={[0, -0.5, 0]} key={2} />, id: 2 },
    { obj: <Porsche scale={1.2} position={[0, 0.4, 0]} key={3} />, id: 3 },
    { obj: <Camera scale={15} position={[0, -0.5, 0]} key={4} />, id: 4 },
    { obj: <Motor scale={2} position={[0, -0.7, 0]} key={5} />, id: 5 }
]

const ThreePage = () => {
    const [ target,setTarget ] = useState(1)
    return (
        <div className="relative h-screen bg-radial from-zinc-600 via-zinc-700 to-zinc-950">
            <Link href={"/"} className="z-10 fixed top-10 left-10 bg-purple-700 p-4 text-white rounded-full group shadow-md/50"><AiFillHome className="size-8 duration-200 group-hover:size-12" /></Link>
            <div className="absolute top-10 right-10 grid grid-cols-2 z-20 gap-3">
                <Image onClick={() => setTarget(1)} className="w-15 h-15 rounded-2xl overflow-hidden cursor-pointer hover:scale-115 duration-200" src={"/model/img/shiba.PNG"} width={1000} height={1000} alt="three" />
                <Image onClick={() => setTarget(2)} className="w-15 h-15 rounded-2xl overflow-hidden cursor-pointer hover:scale-115 duration-200" src={"/model/img/pony.png"} width={1000} height={1000} alt="three" />
                <Image onClick={() => setTarget(3)} className="w-15 h-15 rounded-2xl overflow-hidden cursor-pointer hover:scale-115 duration-200" src={"/model/img/porsche.PNG"} width={1000} height={1000} alt="three" />
                <Image onClick={() => setTarget(4)} className="w-15 h-15 rounded-2xl overflow-hidden cursor-pointer hover:scale-115 duration-200" src={"/model/img/canon.PNG"} width={1000} height={1000} alt="three" />
                <Image onClick={() => setTarget(5)} className="w-15 h-15 rounded-2xl overflow-hidden cursor-pointer hover:scale-115 duration-200" src={"/model/img/motor.PNG"} width={1000} height={1000} alt="three" />
            </div>
            <Canvas>
                <OrbitControls enablePan={false} enableZoom={false} />
                <Environment preset="studio" />
                {item.map((item) => (
                    target === item.id && item.obj
                ))}
            </Canvas>
        </div>
    )
}
export default ThreePage