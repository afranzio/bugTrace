import React from 'react'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import NavBar from "./components/navbar/nav"

function UserPage() {
  return (
    <main>
      <NavBar />
      <div>Home</div>
      <Link href="users"> Users </Link>
      <ProductCard />
    </main>
  )
}

export default UserPage