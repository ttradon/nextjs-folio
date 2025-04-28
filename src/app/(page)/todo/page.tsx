"use client"
import Loading from "@/app/components/Loading"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { FormEvent, useState } from "react"
import { BsTrash } from "react-icons/bs"
import { HiPencil } from "react-icons/hi"
import { MdCancel } from "react-icons/md"
import { motion } from "framer-motion"
import Link from "next/link"
import { AiFillHome } from "react-icons/ai"

type Todo = {
  _id: string 
  content: string
}

const TodoPage = () => {
  const [ Edit,setEdit ] = useState(false)
  const [ Delete,setDelete ] = useState(false)
  const [ content,setContent ] = useState("")
  const [ Id,setId ] = useState("")

  const queryClient = useQueryClient()
  const addTodo = useMutation({
    mutationFn: async (content: string) => {
      return await axios.post("/api/todo",{ content })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todo"]
      })
    }
  })
  const updateTodo = useMutation({
    mutationFn: async (content: string) => {
      await axios.put(`/api/todo/${Id}`,{ content })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todo"]
      })
      setId("")
      setEdit(false)
    }
  })
  const deleteTodo = useMutation({
    mutationFn: async () => {
      await axios.delete(`/api/todo/${Id}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todo"]
      })
      setId("")
      setDelete(false)
    }
  })

  const handleSubmit = (e: FormEvent) =>{
    try {
      e.preventDefault()
      addTodo.mutate(content) 
      const form = e.target as HTMLFormElement
      form.reset()
    } catch (error) {
      console.log(error)
    }
  }

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["todo"],
    queryFn: async () => {
      const resp = await axios.get<Todo[]>("/api/todo")
      return resp.data
    }
  })
  if (isLoading) return <Loading />
  if (isError) throw new Error(error.message)
  return (
    <div className="container mx-auto my-40 flex justify-center">
      <Link href={"/"} className="fixed top-10 left-10 bg-purple-700 p-4 text-white rounded-full group shadow-md/50"><AiFillHome className="size-8 duration-200 group-hover:size-12" /></Link>
      <div className="shadow-lg/10 w-130 rounded-md flex flex-col text-center justify-center p-10 space-y-3">
        <div className="text-4xl font-[700] mb-10 flex justify-center space-x-3">
          <p>TODO</p>
          <p className="text-purple-700">List</p>
        </div>
        <div className="relative mb-10">
          <form onSubmit={handleSubmit}>
            <input onChange={(e) => setContent(e.target.value)} required className="w-full focus:outline-black/20 bg-gray-100 py-3 font-[600] px-5 rounded-full shadow-sm/20" type="text" placeholder="Add your task" />
            <button className="absolute top-1/2 -translate-y-1/2 right-0 text-white cursor-pointer hover:scale-120 duration-200 text-3xl px-4 py-1.5 bg-green-500 rounded-full">+</button>
          </form>
        </div>
        {data?.map((item, index) => (
          <div key={index} className="relative">
            <input className="w-full outline-0 bg-gray-100 py-3 pr-19 overflow-scroll font-[600] px-5 rounded-md shadow-sm/20" type="text" placeholder={item.content} readOnly />
            <HiPencil onClick={() => {setEdit(true),setId(item._id)}} className="size-6 absolute right-10 top-1/2 -translate-y-1/2 cursor-pointer hover:text-blue-600 hover:scale-150 duration-200" />
            <BsTrash onClick={() => {setDelete(true),setId(item._id)}} className="size-5 absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer hover:text-red-500 hover:scale-150 duration-200" />
          </div>
        ))}
      </div>
      {Edit &&
        <div className="h-screen w-screen absolute top-0 bg-black/50 backdrop-blur-xs duration-200">
          <motion.div initial={{ y:-20,opacity:0 }} animate={{ y:0,opacity:1 }} transition={{ duration:0.2}} className="absolute p-5 space-y-5 top-100 left-1/2 -translate-x-1/2 w-130 shadow-md/20 bg-white rounded-2xl">
            <MdCancel onClick={() => setEdit(false)} className="absolute top-1.5 right-1.5 size-7 text-purple-700 cursor-pointer hover:scale-120 duration-200" />
            <p className="text-xl font-[700]">Edit Task</p>
            <form onSubmit={(e) => {e.preventDefault(),updateTodo.mutate(content)}} className="flex justify-center items-center space-x-3">
              <input onChange={(e) => setContent(e.target.value)} required className="bg-gray-100 text-sm w-full font-[600] shadow-sm/20 focus:outline-black/20 py-3 px-5 rounded-xl" type="text" placeholder="Type here" />
              <button className="shadow-sm/20 text-sm cursor-pointer py-3 px-5 rounded-xl bg-purple-700 text-white font-[700] hover:scale-110 duration-200">SUBMIT</button>
            </form>
          </motion.div>
        </div>
      }
      {Delete &&
        <div  className="h-500 overflow-hidden w-screen absolute top-0 bg-black/50 backdrop-blur-xs duration-200">
          <motion.div initial={{ y:-20,opacity:0 }} animate={{ y:0,opacity:1 }} transition={{ duration:0.2}} className="absolute p-5 space-y-5 top-100 left-1/2 -translate-x-1/2 w-100 shadow-md/20 bg-white rounded-2xl">
            <p className="text-center text-xl font-[700]">Are you sure you want to delete?</p>
            <div className="flex justify-center items-center space-x-5">
              <button onClick={() => setDelete(false)} className="shadow-sm/20 text-sm cursor-pointer py-3 px-5 rounded-xl bg-white border-2 border-purple-700 text-purple-700 font-[700] hover:scale-110 duration-200">CANCEL</button>
              <button onClick={() => deleteTodo.mutate()} className="shadow-sm/20 text-sm cursor-pointer py-3 px-5 rounded-xl bg-purple-700 text-white font-[700] hover:scale-110 duration-200">DELETE</button>
            </div>
          </motion.div>
        </div>
      }
    </div>
  )
}
export default TodoPage