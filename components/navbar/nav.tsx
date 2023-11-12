'use client';

import React from 'react'

// Dependencies
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import classnames from 'classnames'
import { HiOutlineLogout } from 'react-icons/hi'
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

// CSS
import "./nav.css"

const navigation = [
    { name: 'Dashboard', href: '/', current: true },
    { name: 'Issues', href: '/issues', current: false },
]

const NavBar = () => {
    const currentPath = usePathname();

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
                <div className="notificationIcon self-center hidden md:block">
                    <div className="flex">
                        {navigation.map((link, index) =>
                            <Link href={link.href} key={index} className={classnames({
                                'transition-colors d-flex mx-3 justify-center self-center hover:font-semibold rounded w-28': true,
                                'border-b-4 border-indigo-500 pt-1 font-semibold': link.href === currentPath || currentPath === "/issues/new" && link.name === "Issues",
                                'text-zinc-500': link.href != currentPath
                            })}>
                                {link.name}
                            </Link>
                        )}
                    </div>
                </div>
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
                                <Link href="/auth/login">
                                    <DropdownMenuItem>
                                        {/* <HiOutlineLogout className="mr-2" /> */}
                                        Login
                                    </DropdownMenuItem>
                                </Link>
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
                    {/* <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <button>
                                
                            </button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content>
                            <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
                            <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
                            <DropdownMenu.Separator />
                            <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>

                            <DropdownMenu.Sub>
                                <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
                                <DropdownMenu.SubContent>
                                    <DropdownMenu.Item>Move to project…</DropdownMenu.Item>
                                    <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>

                                    <DropdownMenu.Separator />
                                    <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>
                                </DropdownMenu.SubContent>
                            </DropdownMenu.Sub>

                            <DropdownMenu.Separator />
                            <DropdownMenu.Item>Share</DropdownMenu.Item>
                            <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>
                            <DropdownMenu.Separator />
                            <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
                                Delete
                            </DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root> */}
                </div>
            </div>
        </div>
    )
}

export default NavBar