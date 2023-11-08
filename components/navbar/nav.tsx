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
                                'transition-colors d-flex mx-3 justify-center self-center hover:text-zinc-800 rounded w-28': true,
                                'border-b-4 border-indigo-500 pt-1': link.href === currentPath || currentPath === "/issues/new" && link.name === "Issues",
                                'text-zinc-500': link.href != currentPath
                            })}>
                                {link.name}
                            </Link>
                        )}
                    </div>
                </div>
                <div className="dropdown d-flex dropdown-bottom dropdown-end ml-3 self-center hidden md:block">
                    <div className="mr-3">
                        <ModeToggle />
                    </div>
                    <label tabIndex={0} className={classnames({
                        'self-center': true,
                        'text-indigo-900': "/users" === currentPath,
                    })} >
                        <button className="bg-transparent text-current border rounded-lg border-slate-700 py-2 px-2 w-fit h-fit">
                            <PiUserBold className="text-lg" />
                        </button>
                    </label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-50">
                        <li>
                            <Link href="/users" className={classnames({
                                'self-center text-zinc-500': true,
                                'text-indigo-900': "/users" === currentPath,
                            })}>
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link href="/users" className={classnames({
                                'self-center text-zinc-500': true,
                                'text-indigo-900': "/users" === currentPath,
                            })}>
                                <HiOutlineLogout />
                                Logout
                            </Link>
                        </li>
                    </ul>
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