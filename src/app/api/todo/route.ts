import { NextRequest, NextResponse } from "next/server"
import { connectMongoDB } from "../../../../lib/mongodb"
import Todo from "../../../../model/todo"

export const GET = async (req: NextRequest,{ params }: any) => {
    try {
        await connectMongoDB()
        const todo = await Todo.find({})
        return NextResponse.json(todo)
    } catch (error) {
        console.log(error)
    }
}

export const POST = async (req: NextRequest,{ params }: any) => {
    try {
        const { content } = await req.json()
        await connectMongoDB()
        await Todo.create({ content })
        return NextResponse.json("ok")
    } catch (error) {
        console.log(error)
    }
}