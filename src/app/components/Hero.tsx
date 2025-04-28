"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="container mx-auto py-50 px-20 space-y-7 relative">
      <div className="text-7xl font-[600] text-shadow-lg tracking-wider flex space-x-5">
        <motion.p initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}>Hey, l'm</motion.p>
        <motion.p initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} className="text-purple-800">TTRADON</motion.p>
        <motion.p initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} className="animate-waving">👋</motion.p>
      </div>
      <motion.p initial={{ y: -100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} className="w-1/2 text-lg text-black/50 font-[600] text-shadow-sm">ผมเป็นนักพัฒนาเว็บแอปพลิเคชันระดับจูเนียร์ ที่มีความสนใจด้านเทคโนโลยีและการพัฒนาซอฟต์แวร์ แม้จะไม่ได้ศึกษาอยู่ที่คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย แต่ผมให้ความสนใจและติดตามแนวทางของหลักสูตร CEDT มาโดยตลอด ปัจจุบันผมกำลังพัฒนาทักษะผ่านการทำโปรเจกต์ต่าง ๆ โดยเน้นที่เว็บแอปพลิเคชัน ทั้งในส่วนของ front-end และ back-end</motion.p>
      <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} className="space-x-5">
        <button className="text-white bg-black border-2 border-black py-2 px-7 rounded-sm font-[700] relative before:absolute before:h-full before:w-0 before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:bg-white hover:before:w-full before:duration-200 hover:text-black duration-100 before:-z-20 z-10">Learn more</button>
        <button className="text-black border-2 border-black py-2 px-7 rounded-sm font-[700] relative before:absolute before:h-full before:w-0 before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:bg-black hover:before:w-full before:duration-200 hover:text-white duration-100 before:-z-20 z-10">Get in contact</button>
      </motion.div>
      <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} className="absolute right-10 top-2/5" drag>
        <Image src={"/tool1.png"} height={190} width={190} alt="." draggable="false" />
      </motion.div>
      <motion.div initial={{ y: -100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} className="absolute right-80 top-1/5" drag>
        <Image src={"/tool2.png"} height={190} width={190} alt="." draggable="false" />
      </motion.div>
    </div>
  )
}
export default Hero