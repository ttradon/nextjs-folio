import { NextRequest, NextResponse } from "next/server"
import { prisma } from "../../../../lib/prisma"

export const GET = async (req: NextRequest,{ params }: any) => {
    try {
        const todo = await prisma.todos.findMany()
        return NextResponse.json(todo)
    } catch (error) {
        console.log(error)
    }
}

export const POST = async (req: NextRequest,{ params }: any) => {
    try {
        const { content } = await req.json()
        await prisma.todos.create({
            data: { content }
        })
        return NextResponse.json("ok")
    } catch (error) {
        console.log(error)
    }
}