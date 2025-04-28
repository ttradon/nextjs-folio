import { NextRequest, NextResponse } from "next/server"
import { connectMongoDB } from "../../../../../lib/mongodb"
import Todo from "../../../../../model/todo"

export const PUT = async (req: NextRequest,{ params }: any) => {
    try {
        const p = await params
        const id = p.id
        const { content } = await req.json()
        await connectMongoDB()
        await Todo.findByIdAndUpdate(id, { content })
        return NextResponse.json("ok")
    } catch (error) {
        console.log(error)
    }
}

export const DELETE = async (req: NextRequest,{ params }: any) => {
    try {
        const p = await params
        const id = p.id
        await connectMongoDB()
        await Todo.findByIdAndDelete(id)
        return NextResponse.json("ok")
    } catch (error) {
        console.log(error)
    }
}