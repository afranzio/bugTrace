'use client';

import React, { useEffect, useState } from 'react'

// Dependencies
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import classnames from 'classnames'
import { GiHamburgerMenu } from 'react-icons/gi'
import { PiUserBold } from 'react-icons/pi'
import { ModeToggle } from "@/components/theme-toogle";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

// CSS
import "./nav.css"

const navigation = [
    { name: 'Dashboard', href: '/', current: true },
    { name: 'Issues', href: '/issues', current: false },
]

const NavBar = () => {
    const currentPath = usePathname();
    const router = useRouter();
    const supabase = createClientComponentClient();
    const [userLogged, setUserLogged] = useState(false)

    useEffect(() => {
        const getSession = async () => {
            const { data } = await supabase.auth.getSession();
            setUserLogged(data.session?.user ? true : false)
            if (!data.session?.user) {
                router.push("/login");
            }
        }
        getSession()
    }, [userLogged, router, supabase.auth])

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        router.refresh();
    };

    return (
        <div>
            <div className="flex justify-between px-10 py-3 mb-3 border-b">
                <Link href="/" className="icon flex self-center border p-1 rounded">
                    <Image
                        src="/bug.svg"
                        width={30}
                        height={30}
                        alt="Logo"
                    />
                    <strong className='font-mono flex self-center ml-1'>
                        Tracker
                    </strong>
                </Link>
                {
                    userLogged && <div className="notificationIcon self-center hidden md:block">
                        <div className="flex">
                            {navigation.map((link, index) =>
                                <Link href={link.href} key={index} className={classnames({
                                    'transition-colors d-flex mx-3 justify-center self-center hover:font-semibold rounded w-28': true,
                                    'border-b-4 border-indigo-500 pt-1 font-semibold': link.href === currentPath || currentPath === "/issues/new" && link.name === "Issues",
                                })}>
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    </div>
                }
                <div className='d-flex self-center'>
                    <div className="mr-1 self-center">
                        <ModeToggle />
                    </div>
                    <div className="dropdown d-flex dropdown-bottom dropdown-end ml-3 self-center hidden md:block">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <label tabIndex={0}>
                                    <Button variant="outline" size="icon">
                                        <PiUserBold className="text-lg" />
                                    </Button>
                                </label>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <Link href="/users">
                                    <DropdownMenuItem>
                                        Profile
                                    </DropdownMenuItem>
                                </Link>
                                {
                                    !userLogged ? <Link href="/login">
                                        <DropdownMenuItem>
                                            Login
                                        </DropdownMenuItem>
                                    </Link> : <DropdownMenuItem onClick={handleSignOut}>
                                        Logout
                                    </DropdownMenuItem>
                                }

                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className="self-center block md:hidden">
                    <details className="dropdown">
                        <summary className="m-0 btn">
                            <GiHamburgerMenu className="text-xl" />
                        </summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 right-0 rounded-box w-52">
                            {navigation.map((link, index) =>
                                <Link href={link.href} key={index} className={classnames({
                                    'transition-colors d-flex my-3 justify-center self-center hover:text-zinc-800 rounded w-28': true,
                                    'border-b-4 border-indigo-500 pt-1': link.href === currentPath || currentPath === "/issues/new" && link.name === "Issues",
                                    'text-zinc-500': link.href != currentPath
                                })}>
                                    {link.name}
                                </Link>
                            )}
                        </ul>
                    </details>
                </div>
            </div>
        </div>
    )
}

export default NavBar