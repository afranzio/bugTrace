import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import prisma from "@/prisma/client";

async function AppPage() {
  const allIssues = await prisma.issue.count()

  const openIssues = await prisma.issue.count({
    where: { status: "OPEN" }
  })

  const inProgressIssues = await prisma.issue.count({
    where: { status: "IN_PROGRESS" }
  })

  const closedIssues = await prisma.issue.count({
    where: { status: "CLOSE" }
  })

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
            <div className="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="stat-title">Open Issues</div>
            <div className="stat-value text-secondary">{openIssues}</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
              </svg>

            </div>
            <div className="stat-title">In Progress Issues</div>
            <div className="stat-value text-primary">{inProgressIssues}</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path fillRule="evenodd" d="M11.484 2.17a.75.75 0 011.032 0 11.209 11.209 0 007.877 3.08.75.75 0 01.722.515 12.74 12.74 0 01.635 3.985c0 5.942-4.064 10.933-9.563 12.348a.749.749 0 01-.374 0C6.314 20.683 2.25 15.692 2.25 9.75c0-1.39.223-2.73.635-3.985a.75.75 0 01.722-.516l.143.001c2.996 0 5.718-1.17 7.734-3.08zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zM12 15a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-.008a.75.75 0 00-.75-.75H12z" clipRule="evenodd" />
              </svg>

            </div>
            <div className="stat-value">{closedIssues / allIssues * 100}%</div>
            <div className="stat-title">Issues Resolved</div>
            <div className="stat-desc text-secondary">{openIssues + inProgressIssues} tasks remaining</div>
          </div>

        </div>
      </div>
    </main>
  )
}

export default AppPage