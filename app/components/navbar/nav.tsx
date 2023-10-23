import React from 'react'
import Image from 'next/image'
import Button from 'react-bootstrap/Button';

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
            <div className="d-flex TopNavbar w-100">
                <div className="icon">
                    <Image
                        src="/bug.svg"
                        width={45}
                        height={45}
                        alt="Author"
                    />
                </div>
                <div className="searchBar">
                    <input type="text" name="🔍Search" aria-label="🔍Search" style={{"color": "black", "width": "350px"}} />
                </div>
                <div className="notificationIcon">
                    <div className="d-flex">
                        <Image
                            src="/bug.svg"
                            width={30}
                            height={30}
                            alt="Author"
                        />
                        <Image
                            src="/bug.svg"
                            width={30}
                            height={30}
                            alt="Author"
                        />
                    </div>
                </div>
            </div>
            <div className='w-100'>
                <ul className="d-flex navItems">
                    {
                        navigation.map((nav, index) => {
                            return (
                            <li className="navItem" key={index}>
                                <Button>
                                    {nav.name}
                                </Button>
                            </li>);
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default NavBar