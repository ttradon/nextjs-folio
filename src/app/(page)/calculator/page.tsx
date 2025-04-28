"use client"
import Link from "next/link"
import { useState } from "react"
import { AiFillHome } from "react-icons/ai"

const cal1 = [
    "+","-","x","/"
]

const cal2 = [
    "7","8","9",
    "4","5","6",
    "1","2","3",
    "0",".","AC"
]

const CalculatorPage = () => {
    const [ result,setResult ] = useState("")
    const [ st,setSt ] = useState(true)

    const Solve = (val: string) => {
        if(val === "="){
            try {
                setResult(eval(result))
                setSt(false)
            } catch (error) {
                setResult("Error")
            }
        } else if(val === "AC"){
            setResult("")
            setSt(true)
        } else if(val === "x"){
            setResult((pre) => pre+"*")
            setSt(false)
        } else {
            setResult((pre) => pre+val)
            setSt(false)
        }
    }
    return (
        <div className="container mx-auto my-40 flex justify-center">
            <Link href={"/"} className="fixed top-10 left-10 bg-purple-700 p-4 text-white rounded-full group shadow-md/50"><AiFillHome className="size-8 duration-200 group-hover:size-12" /></Link>
            <div className="w-115 rounded-2xl shadow-md/20 overflow-hidden">
                <input className="w-full text-end py-5 px-5 text-6xl font-[800] bg-amber-50/20" type="text" placeholder={st ? "0" : result} readOnly />
                <div className="grid grid-cols-4 w-full">
                    {cal1.map((item,index) => (
                        <div onClick={() => Solve(item)} key={index} className="py-8 text-3xl text-gray-500 font-[800] bg-gray-200 text-center hover:text-black hover:-translate-y-1 cursor-pointer duration-200">{item}</div>
                    ))}
                    <div className="col-span-3">
                        <div className="grid grid-cols-3">
                            {cal2.map((item,index) => (
                                <div onClick={() => Solve(item)} key={index} className="py-8 text-3xl text-gray-500 font-[800] bg-white text-center hover:text-black hover:-translate-y-1 cursor-pointer duration-200">{item}</div>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div onClick={() => Solve("=")} className="flex justify-center items-center h-full text-3xl text-gray-500 font-[800] bg-rose-400 hover:text-black hover:-translate-y-1 cursor-pointer duration-200">
                            <p>=</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CalculatorPage