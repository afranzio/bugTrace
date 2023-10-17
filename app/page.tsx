import React from 'react'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

function UserPage() {
  return (
    <main>   
      <div>Home</div>
      <Link href="users"> Users </Link>
      <ProductCard />
    </main>
  )
}

export default UserPage