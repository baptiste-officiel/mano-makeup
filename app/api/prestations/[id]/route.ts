import prisma from '@/app/libs/prismadb'
import { NextResponse } from 'next/server'

export const GET = async(request: any, {params}: any) => {

    try {
        const { id } = params;
        // console.log("🚀 ~ file: route.ts:9 ~ GET ~ id:", id)

        const prestation = await prisma.prestation.findUnique({
            where: { id }
        })

        if (!prestation) {
            return NextResponse.json({message: 'No prestation'}, {status: 404}) 
        }

        return NextResponse.json(prestation);

    } catch (error) {
        // console.log("🚀 ~ file: route.ts:23 ~ GET ~ error:", error)
        return NextResponse.json({message: 'La prestation ne peut pas être affichée', error}, {status: 500})

    }
}