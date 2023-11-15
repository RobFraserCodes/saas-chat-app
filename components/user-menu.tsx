import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"  
import UserAvatar from './user-avatar'
import { Session } from 'next-auth'
import { Button } from './ui/button'
import { signOut } from 'next-auth/react'
import Link from 'next/link'

export default function UserMenu( { session } : { session: Session | null }) {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger>
            <UserAvatar name={session?.user?.name} image={session?.user?.image} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/account">
                My Membership
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button variant={"ghost"} onClick={() => signOut()}>
                Sign Out
              </Button>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}
