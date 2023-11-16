import React from 'react'

// Dependencies
import BackButton from '@/components/button/BackButton';

// DB
import prisma from "@/prisma/client";

async function IssueBoard({ params }: { params: { id: string } }) {

  const issue = await prisma.issue.findUniqueOrThrow({
    where: { id: Number(params.id) }
  })



  return (
    <main>
      <div className="max-w-2xl mx-auto shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 d-flex justify-between">
          <div>
            <h3 className="text-lg leading-6 font-medium ">
              {issue.title}
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-slate-400">
              Owner: {issue.createdBy}
            </p>
            <p className="mt-1 max-w-2xl text-sm text-slate-400">
              Posted: {issue.createdAt.toLocaleString()}
            </p>
          </div>
          <div>
            {issue.assignedTo}
          </div>
        </div>
        <div className="border-t border-gray-200 p-3 text-justify">
          {issue.description}
        </div>
        <BackButton />
      </div>
    </main>
  )
}

export default IssueBoard