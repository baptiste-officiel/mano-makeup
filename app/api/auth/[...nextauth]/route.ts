import NextAuth from "next-auth/next";
import prisma from '@/app/libs/prismadb'
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from 'next-auth/providers/credentials'
import { AuthOptions } from "next-auth";
import bcrypt from 'bcrypt'


export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: {label: 'Email', type: 'text', placeholder: 'jsmith'},
                password: {label: 'Password', type: 'password'},
                username: {label: 'Username', type: 'text', placeholder: 'John Smith'},
            },
            async authorize(credentials){
                // Check if email or password is valid 
                if (!credentials?.email || !credentials?.password) {
                    return null
                }
                
                // Check if the user exists 
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })

                if (!user) {
                    // throw new Error('This user doesn\'t exist')
                    return null
                }

                // Check to see if password match 
                const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword as string)

                if (!passwordMatch) {
                    return null;
                }

                // return user if everything is ok 
                return user
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/login'
    },
    debug: process.env.NODE_ENV === 'development'
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }