'use client';

import React from 'react'

// Dependencies
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import classnames from 'classnames'
import { HiOutlineLogout } from 'react-icons/hi'

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
                <div className="notificationIcon flex self-center">
                    <div className="flex">
                        {navigation.map((link, index) =>
                            <Link href={link.href} key={index} className={classnames({
                                'transition-colors d-flex mx-3 justify-center self-center hover:text-zinc-800': true,
                                'border-b-4 border-indigo-500 pt-1': link.href == currentPath,
                                'text-zinc-500': link.href != currentPath
                            })}>
                                {link.name}
                            </Link>
                        )}
                        <div className="dropdown dropdown-bottom dropdown-end ml-3 self-center">
                            <label tabIndex={0} className={classnames({
                                'self-center': true,
                                'text-indigo-900': "/users" == currentPath,
                            })} >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-50">
                                <li>
                                    <Link href="/users" className={classnames({
                                        'self-center': true,
                                        'text-indigo-900': "/users" == currentPath,
                                    })}>
                                        Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/users" className={classnames({
                                        'self-center': true,
                                        'text-indigo-900': "/users" == currentPath,
                                    })}>
                                        <HiOutlineLogout />
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar