"use client"
import Link from "next/link"
import { motion } from "framer-motion"

const NavBar = () => {
  return (
    <motion.div initial={{ y:-100,opacity:0 }} whileInView={{ y:0,opacity:1 }} className="container mx-auto py-10 flex justify-between items-center">
      <div className="flex justify-center items-center space-x-2 shadow-lg rounded-3xl px-3 py-2">
        <div className="bg-purple-800 w-7 h-7 rounded-full" />
        <p className="text-xl text-shadow-md font-[700] tracking-widest">FOLIO.</p>
      </div>
      <div className="text-lg text-purple-900 font-[700] space-x-7">
        <Link href={"#home"} className="relative before:absolute before:bg-purple-950 before:bottom-0 before:h-0.5 before:w-full before:scale-0 hover:before:scale-100 before:duration-300">Home</Link>
        <Link href={"#about"} className="relative before:absolute before:bg-purple-950 before:bottom-0 before:h-0.5 before:w-full before:scale-0 hover:before:scale-100 before:duration-300">About</Link>
        {/* <Link href={"#experience"} className="relative before:absolute before:bg-purple-950 before:bottom-0 before:h-0.5 before:w-full before:scale-0 hover:before:scale-100 before:duration-300">Experience</Link> */}
        <Link href={"#projects"} className="relative before:absolute before:bg-purple-950 before:bottom-0 before:h-0.5 before:w-full before:scale-0 hover:before:scale-100 before:duration-300">Projects</Link>
        <button className="text-black border-2 border-black py-2 px-7 rounded-sm relative before:absolute before:h-full before:w-0 before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:bg-black hover:before:w-full before:duration-200 hover:text-white duration-100 before:-z-10 z-10">Get in contact</button>
      </div>
    </motion.div>
  )
}
export default NavBar