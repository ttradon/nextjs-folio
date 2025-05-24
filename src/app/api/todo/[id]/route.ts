import { NextRequest, NextResponse } from "next/server"
import { prisma } from "../../../../../lib/prisma"

export const PUT = async (req: NextRequest,{ params }: any) => {
    try {
        const id = await params.id
        const { content } = await req.json()
        await prisma.todos.update({
            where: { id },
            data: { content }
        })
        return NextResponse.json("ok")
    } catch (error) {
        console.log(error)
    }
}

export const DELETE = async (req: NextRequest,{ params }: any) => {
    try {
        const id = await params.id
        await prisma.todos.delete({
            where: { id }
        })
        return NextResponse.json("ok")
    } catch (error) {
        console.log(error)
    }
}