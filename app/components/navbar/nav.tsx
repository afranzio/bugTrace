import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import "./nav.css"

const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
]

const NavBar = () => {
    return (
        <div>
            <div className="flex container justify-between mx-auto px-10">
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
                <div className="searchBar ">
                    <input type="text" className="rounded w-96 text-sm" name="🔍 Search" placeholder="🔍 Search" style={{ "color": "black" }} />
                </div>
                <div className="notificationIcon flex self-center">
                    <div className="flex">
                        <Link href="/notification" className='self-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                        </Link>
                        <Link href="/users" className='ml-5 self-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <hr className='my-5' />
            {/* <div className='w-100'>
                <ul className="flex">
                    {
                        navigation.map((nav, index) => {
                            return (
                                <li className="navItem mx-2" key={index}>
                                    <button className="btn bg-[#0a0a0a] py-1 px-3 rounded border">
                                        {nav.name}
                                    </button>
                                </li>);
                        })
                    }
                </ul>
            </div> */}
        </div>
    )
}

export default NavBar