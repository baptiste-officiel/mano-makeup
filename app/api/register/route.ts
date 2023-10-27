import { NextResponse } from 'next/server';
import prisma from '@/app/libs/prismadb'
import bcrypt from 'bcrypt'

// const prisma = new PrismaClient()

// type bodyType= {
//     name: string,
//     email: string,
//     password: string
// }

export async function POST(
    request: Request
) {
    const body = await request.json();
    const {
        name,
        email,
        password
    } = body;
    console.log("🚀 ~ file: route.ts:5 ~ body:", body)

    if (!name || !email || !password) {
        return new NextResponse("Missing name, email or password", {status: 400})
    }
    
    const exist = await prisma?.user.findUnique({
        where: {
            email: email
        }
    })
    if (exist) {
        return new Error("User already exists")        
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            name,
            email,
            hashedPassword
        }
    });

    return NextResponse.json(user)
}