import { FirestoreAdapter } from "@auth/firebase-adapter";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { adminAuth, adminDb } from "./firebase-admin";

interface User {
    id: number;
    name: string;
    email: string;
  }
  
export const authOptions: NextAuthOptions = {
    providers: [
        // CredentialsProvider({
        //     name: "Credentials",
        //     credentials: {
        //         username: { label: "Username", type: "text", placeholder: "jsmith" },
        //         password: { label: "Password", type: "password" },
        //     },
        //     async authorize(credentials) {
        //         const user = { id: 1, name: "J Smith", email: "jsmith@example.com" };
        //         if (user) {
        //             return user;
        //         } else {
        //             return null;
        //         }
        //     }
        // }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),

    ],
    pages: {
        // signIn: "/login",
        newUser: "/register",
    },
    callbacks: {
        session: async ({session, token}) => {
            if (session?.user) {
                if (token.sub) {
                    session.user.id = token.sub;

                    const firebaseToken = await adminAuth.createCustomToken(token.sub);
                    session.firebaseToken = firebaseToken;
                }
            }
          
            return session;
        },
        jwt: async ({token, user}) => {
            if (user) {
                token.id = user.id;
            }
            return token;
        }
    },
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
        updateAge: 24 * 60 * 60, // 24 hours
    },
    adapter: FirestoreAdapter(adminDb),
} satisfies NextAuthOptions;