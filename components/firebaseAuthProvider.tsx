'use client'

import { Session } from "next-auth"
import { useSession } from "next-auth/react";
import { useEffect } from "react"

async function syncFirebaseAuth(session: Session) {
    if (session && session.firebaseToken) {
        try {
            await signInWithCustomToken(auth, session.firebaseToken);
        } catch (error) {
            console.error("Error signing in with custom token: ", error);
        }
    } else {
        // No session? No problem, just clear the firebase token
        auth.signOut();
    }
}

function FirebaseAuthProvider( { children } : { children: React.ReactNode }) {
    const {data: session, status} = useSession();
    
    useEffect(() => {
        if (!session) return;

        syncFirebaseAuth(session);
    }, [session]);

  return (
    <div>{children}</div>
  )
}

export default FirebaseAuthProvider;