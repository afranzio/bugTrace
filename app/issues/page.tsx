import React from 'react'

// Dependencies
import DataTableShadcn from '@/components/data-table/shadcnDatatable'


interface Issue {
  "id": number,
  "title": string,
  "description": string,
  "createdAt": string,
  "updatedAt": string,
  "status": "OPEN" | "IN_PROGRESS" | "HOLD" | "CLOSE"
}

const Issues = async () => {

  let data: Issue[] = []

  try {
    const response = await fetch('http://localhost:3000/api/issues?type=NotClosed', { cache: 'no-store' })
    data = await response.json();
    console.log(data)
  } catch (error) {
    console.log("API error")
  }

  return (
    <div>

      <main className="container w-full md:w-full">
        <h2 className="leading-6 font-medium border-b border-gray-900/10 pb-3 subpixel-antialiased text-xl">Issues</h2>
          <DataTableShadcn data={data} />
      </main>
    </div>
  )
}

export default Issues