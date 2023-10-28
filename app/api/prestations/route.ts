import prisma from '@/app/libs/prismadb'
import { NextResponse } from 'next/server'

export const POST = async(request: any) => {

    try {
        const body = await request.json();
        const {
            title,
            image,
            description,
            duration,
            price,
            secondaryPrice
        } = body;

        const newPrestation = await prisma.prestation.create({
            data: {
                title,
                image,
                description,
                duration,
                price,
                secondaryPrice
            }
        })

        return NextResponse.json(newPrestation);

    } catch (error) {
        return NextResponse.json({message: 'La prestation n\'a pas pu être enregistrée', error}, {status: 500})
    }
}

export const GET = async() => {

    try {
        const prestations = await prisma.prestation.findMany()

        return NextResponse.json(prestations);

    } catch (error) {
        return NextResponse.json({message: 'Les prestations ne peuvent pas être affichées', error}, {status: 500})

    }
}