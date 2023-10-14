import { NextResponse } from "next/server";

type bodyType= {
    name: string,
    email: string,
    message: string
}

export async function POST(
    request: Request
) {

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({});

    const body: bodyType = await request.json();
    const {
        name,
        email,
        message
    } = body;
    console.log("🚀 ~ file: route.ts:5 ~ body:", body)
 
    
    return NextResponse.json({ message: 'Sent'}, {status: 200})
}