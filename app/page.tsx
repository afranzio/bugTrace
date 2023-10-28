import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function AppPage() {
  return (
    <main className="mx-auto justify-center d-flex">
      <div>
        <Link className="d-flex justify-center" href="/issues/new">
          <button className="btn btn-wide btn-neutral my-3">
            Raise a Issue
          </button>
        </Link>
        <div className="card w-96 glass">
          <figure>
            <Image src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" width="500" height="500" alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary mt-3">Learn now!</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AppPage