"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const item = [
  { img: "/todo.jpeg", href: "/todo", head: "TODO LIST", label: "โปรเจค Todo List ใช้ MySQL เก็บข้อมูลรายการที่ต้องทำ เช่น การเพิ่ม แก้ไข ลบ และแสดงสถานะของงาน." },
  { img: "/calculator.jpg", href: "/calculator", head: "CALCULATOR", label: "โปรเจค เครื่องคิดเลข คือเว็บที่ช่วยให้ผู้ใช้สามารถคำนวณผลลัพธ์ทางคณิตศาสตร์ เช่น การบวก ลบ คูณ หาร และแสดงผลลัพธ์ทันทีหลังจากการคำนวณ." },
  { img: "/three.jpg", href: "/three", head: "THREE", label: "โปรเจค Three.js คือเว็บที่ใช้สร้างและแสดงผลโมเดล 3D แบบโต้ตอบได้ผ่านเบราว์เซอร์ โดยใช้ไลบรารี Three.js เพื่อจัดการวัตถุ แสง และพื้นผิวในโลก 3 มิติ." },
]

const Projects = () => {
  return (
    <div id="projects" className="container mx-auto h-screen pt-20 space-y-20 px-50">
      <motion.div initial={{ y: -100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="flex justify-center items-center text-6xl font-[700] text-shadow-md/30 space-x-5">
        <p>Lastest</p>
        <p className="text-purple-700">Project</p>
      </motion.div>
      <motion.div initial={{ y: -100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="grid grid-cols-3 gap-10">
        {item.map((item,index) => (
          <div key={index} className="w-full h-60 rounded-lg shadow-lg/20 overflow-hidden group hover:h-full duration-200 hover:-translate-y-10">
            <Image className="h-60" src={item.img} width={1000} height={1000} alt="todo" />
            <div className="p-7 flex flex-col justify-center items-center text-center space-y-3 scale-0 group-hover:scale-100">
              <p className="font-[800] text-xl text-purple-700">{item.head}</p>
              <p className="font-[600]">{item.label}</p>
              <Link href={item.href} className="text-lg text-center py-1 w-20 font-[700] rounded-sm shadow-md/20 hover:bg-purple-700 hover:text-white duration-200">Try</Link>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
export default Projects