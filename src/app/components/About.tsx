"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { FaCss3Alt, FaHtml5, FaNodeJs } from "react-icons/fa"
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si"
import { TbBrandReact } from "react-icons/tb";
import { SiNextdotjs } from "react-icons/si";

const About = () => {
    return (
        <div id="about" className="container my-40 pt-10 px-25 mx-auto h-screen flex flex-col">
            <div className="flex flex-col justify-center items-center space-y-5">
                <motion.p initial={{ y: -100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="text-xl font-[600] text-shadow-lg">Introduction</motion.p>
                <motion.div initial={{ y: -100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="text-6xl font-[600] text-shadow-lg flex space-x-5">
                    <p>About</p>
                    <p className="text-purple-700">Me</p>
                </motion.div>
            </div>
            <div className="flex mt-20 space-x-30">
                <motion.div initial={{ y: -100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
                    <Image className="rounded-3xl shadow-md min-w-100 h-150" src={"/jiw.png"} width={1000} height={1000} alt="pic" />
                </motion.div>
                <div className="flex flex-col space-y-5">
                    <motion.p initial={{ y: -100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="text-shadow-md font-[700] text-lg text-black/70 leading-8">ผมเป็นนักเรียนชั้นมัธยมศึกษาปีที่ 6 จากจังหวัดสุราษฎร์ธานี มีความสนใจอย่างจริงจังในด้านเทคโนโลยีและการพัฒนาซอฟต์แวร์ โดยเฉพาะการสร้างเว็บแอปพลิเคชันทั้งในส่วน Front-end และ Back-end แม้ไม่ได้เรียนอยู่ในสายวิศวกรรมศาสตร์ แต่ผมได้ติดตามและศึกษาหลักสูตรของ CEDT จุฬาลงกรณ์มหาวิทยาลัยอย่างต่อเนื่อง เพื่อเสริมสร้างความรู้และพัฒนาทักษะให้สอดคล้องกับมาตรฐานสายงานจริง ปัจจุบันผมกำลังพัฒนาความสามารถผ่านการทำโปรเจกต์จริง เพื่อเตรียมความพร้อมในการศึกษาต่อในระดับมหาวิทยาลัยและก้าวสู่เส้นทางนักพัฒนาซอฟต์แวร์อย่างเต็มตัว</motion.p>
                    <div className="grid grid-cols-3 gap-6">
                        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="hover:-translate-y-2 duration-200 w-full border border-black/20 shadow-md/20 rounded-xl flex flex-col space-y-5 pt-7 px-7 min-h-[220px]">
                            <svg className="size-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" /></svg>
                            <p className="font-[800]">Languages</p>
                            <p className="text-black/70">HTML, CSS, JavaScript <br />React Js, Next Js</p>
                        </motion.div>
                        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="hover:-translate-y-2 duration-200 w-full border border-black/20 shadow-md/20 rounded-xl flex flex-col space-y-5 px-7 pt-9 min-h-[220px]">
                            <svg className="size-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M219.3 .5c3.1-.6 6.3-.6 9.4 0l200 40C439.9 42.7 448 52.6 448 64s-8.1 21.3-19.3 23.5L352 102.9l0 57.1c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-57.1L48 93.3l0 65.1 15.7 78.4c.9 4.7-.3 9.6-3.3 13.3s-7.6 5.9-12.4 5.9l-32 0c-4.8 0-9.3-2.1-12.4-5.9s-4.3-8.6-3.3-13.3L16 158.4l0-71.8C6.5 83.3 0 74.3 0 64C0 52.6 8.1 42.7 19.3 40.5l200-40zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7L30.7 512C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6z" /></svg>
                            <p className="font-[800]">Education</p>
                            <p className="text-black/70">B.Tech in Computer <br />Science</p>
                        </motion.div>
                        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="hover:-translate-y-2 duration-200 w-full border border-black/20 shadow-md/20 rounded-xl flex flex-col space-y-5 px-7 pt-9 min-h-[220px]">
                            <svg className="size-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z" /></svg>
                            <p className="font-[800]">Projects</p>
                            <p className="text-black/70">Built more than 5 projects</p>
                        </motion.div>
                    </div>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-lg text-purple-700 font-[600] text-shadow-sm/10">Tool I use:</motion.p>
                    <div className="flex items-center space-x-5 mt-7">
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="rounded-full flex justify-center items-center w-12 h-12 bg-gray-200 shadow-md/10 hover:bg-[#f06529] hover:text-white duration-200 relative before:absolute before:top-0 before:rounded-3xl before:bg-[#f06529] before:content-['HTML'] before:text-white before:text-sm before:font-[700] before:py-1.5 before:px-3 after:content-['▾'] after:absolute after:text-3xl after:top-4.5 after:text-[#f06529] before:scale-0 after:scale-0 before:duration-200 after:duration-200 hover:after:scale-100 hover:before:scale-100 hover:before:-top-12 hover:after:-top-7.5">
                            <FaHtml5 className="size-7" />
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="rounded-full flex justify-center items-center w-12 h-12 bg-gray-200 shadow-md/10 hover:bg-[#2965f1] hover:text-white duration-200 relative before:absolute before:top-0 before:rounded-3xl before:bg-[#2965f1] before:content-['CSS'] before:text-white before:text-sm before:font-[700] before:py-1.5 before:px-3 after:content-['▾'] after:absolute after:text-3xl after:top-4.5 after:text-[#2965f1] before:scale-0 after:scale-0 before:duration-200 after:duration-200 hover:after:scale-100 hover:before:scale-100 hover:before:-top-12 hover:after:-top-7.5">
                            <FaCss3Alt className="size-7" />
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="rounded-full flex justify-center items-center w-12 h-12 bg-gray-200 shadow-md/10 hover:bg-[#f0db4f] hover:text-white duration-200 relative before:absolute before:top-0 before:rounded-3xl before:bg-[#f0db4f] before:content-['JS'] before:text-white before:text-sm before:font-[700] before:py-1.5 before:px-3 after:content-['▾'] after:absolute after:text-3xl after:top-4.5 after:text-[#f0db4f] before:scale-0 after:scale-0 before:duration-200 after:duration-200 hover:after:scale-100 hover:before:scale-100 hover:before:-top-12 hover:after:-top-7.5">
                            <DiJavascript className="size-7.5  " />
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="rounded-full flex justify-center items-center w-12 h-12 bg-gray-200 shadow-md/10 hover:bg-[#007acc] hover:text-white duration-200 relative before:absolute before:top-0 before:rounded-3xl before:bg-[#007acc] before:content-['TS'] before:text-white before:text-sm before:font-[700] before:py-1.5 before:px-3 after:content-['▾'] after:absolute after:text-3xl after:top-4.5 after:text-[#007acc] before:scale-0 after:scale-0 before:duration-200 after:duration-200 hover:after:scale-100 hover:before:scale-100 hover:before:-top-12 hover:after:-top-7.5">
                            <SiTypescript className="size-5.5  " />
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="rounded-full flex justify-center items-center w-12 h-12 bg-gray-200 shadow-md/10 hover:bg-[#61DBFB] hover:text-white duration-200 relative before:absolute before:top-0 before:rounded-3xl before:bg-[#61DBFB] before:content-['REACT'] before:text-white before:text-sm before:font-[700] before:py-1.5 before:px-3 after:content-['▾'] after:absolute after:text-3xl after:top-4.5 after:text-[#61DBFB] before:scale-0 after:scale-0 before:duration-200 after:duration-200 hover:after:scale-100 hover:before:scale-100 hover:before:-top-12 hover:after:-top-7.5">
                            <TbBrandReact className="size-6.5  " />
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="rounded-full flex justify-center items-center w-12 h-12 bg-gray-200 shadow-md/10 hover:bg-[#000] hover:text-white duration-200 relative before:absolute before:top-0 before:rounded-3xl before:bg-[#000] before:content-['NEXT'] before:text-white before:text-sm before:font-[700] before:py-1.5 before:px-3 after:content-['▾'] after:absolute after:text-3xl after:top-4.5 after:text-[#000] before:scale-0 after:scale-0 before:duration-200 after:duration-200 hover:after:scale-100 hover:before:scale-100 hover:before:-top-12 hover:after:-top-7.5">
                            <SiNextdotjs className="size-6.5  " />
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="rounded-full flex justify-center items-center w-12 h-12 bg-gray-200 shadow-md/10 hover:bg-[#6cc24a] hover:text-white duration-200 relative before:absolute before:top-0 before:rounded-3xl before:bg-[#6cc24a] before:content-['NODE'] before:text-white before:text-sm before:font-[700] before:py-1.5 before:px-3 after:content-['▾'] after:absolute after:text-3xl after:top-4.5 after:text-[#6cc24a] before:scale-0 after:scale-0 before:duration-200 after:duration-200 hover:after:scale-100 hover:before:scale-100 hover:before:-top-12 hover:after:-top-7.5">
                            <FaNodeJs className="size-6.5  " />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About