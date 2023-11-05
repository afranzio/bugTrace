'use client';

import React from 'react'

// Dependencies
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import classnames from 'classnames'
import { HiOutlineLogout } from 'react-icons/hi'
import { GiHamburgerMenu } from 'react-icons/gi'

// CSS
import "./nav.css"
import { DropdownMenu } from '@radix-ui/themes';

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
                <div className="dropdown dropdown-bottom dropdown-end ml-3 self-center hidden md:block">
                    <label tabIndex={0} className={classnames({
                        'self-center': true,
                        'text-indigo-900': "/users" === currentPath,
                    })} >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-50">
                        <li>
                            <Link href="/users" className={classnames({
                                'self-center': true,
                                'text-indigo-900': "/users" === currentPath,
                            })}>
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link href="/users" className={classnames({
                                'self-center': true,
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
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            {navigation.map((link, index) =>
                                <Link href={link.href} key={index} className={classnames({
                                    'transition-colors d-flex mx-3 justify-center self-center hover:text-zinc-800 rounded w-28': true,
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