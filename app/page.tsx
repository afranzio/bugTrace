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
        <div className="card w-96 glass mx-auto">
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
        <div className="stats shadow my-5">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </div>
            <div className="stat-title">Total Issues</div>
            <div className="stat-value text-primary">25.6K</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <div className="stat-title">Open Issues</div>
            <div className="stat-value text-secondary">2.6M</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <Image src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" width="500" height="500" alt="car!" />
                </div>
              </div>
            </div>
            <div className="stat-value">86%</div>
            <div className="stat-title">Issues Resolved</div>
            <div className="stat-desc text-secondary">31 tasks remaining</div>
          </div>

        </div>
      </div>
    </main>
  )
}

export default AppPage