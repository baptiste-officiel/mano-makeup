import prisma from '@/app/libs/prismadb'
import { NextResponse } from 'next/server'

export const GET = async(request: any, {params}: any) => {

    try {
        const { id } = params;

        const prestation = await prisma.prestation.findUnique({
            where: { id }
        })

        if (!prestation) {
            return NextResponse.json({message: 'No prestation'}, {status: 404}) 
        }

        return NextResponse.json(prestation);

    } catch (error) {
        return NextResponse.json({message: 'La prestation ne peut pas être affichée', error}, {status: 500})

    }
}

export const PUT = async(request: any, { params }: any) => {
    try {
        const body = await request.json()
        const {
            title,
            description,
            image,
            duration,
            price,
            secondaryPrice
        } = body

        const { id } = params;

        const updatedPost = await prisma.prestation.update({
            where: {
                id
            },
            data: {
                title,
                description,
                image,
                duration,
                price,
                secondaryPrice
            }
        })

        if (!updatedPost) {
            return NextResponse.json({message: 'No post'}, {status: 404}) 
        }

        return NextResponse.json(updatedPost);

    } catch (error) {
        return NextResponse.json({message: 'UPDATE error', error}, {status: 500})
    }
}

export const DELETE = async(request: any, { params }: any) => {
    try {
        
        const { id } = params;        

        await prisma.prestation.delete({
            where: {
                id
            }
        })

        return NextResponse.json('Post has been deleted');

    } catch (error) {
        return NextResponse.json({message: 'POST error', error}, {status: 500})
    }
}