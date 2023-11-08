import React from 'react'

// Dependencies
import DropDownMenu from '@/components/dropdown/dropdown'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


interface Issue {
  "id": number,
  "title": string,
  "description": string,
  "createdAt": string,
  "status": string
}

const Issues = async () => {

  let data: Issue[] = []
  try {
    const response = await fetch('http://localhost:3000/api/issues', { cache: 'no-store' })
    data = await response.json();
  } catch (error) {
    console.log("API error")
  }

  return (
    <div>
      <main className="container w-full md:w-1/2">
        <h2 className="leading-6 font-medium border-b border-gray-900/10 pb-3 subpixel-antialiased text-xl">Issues</h2>
        {
          data.length > 0 ?
          <>
            <Table>
              <TableCaption>A list of Issues.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Status</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">
                      <DropDownMenu className="self-center" userStatus={user} />
                    </TableCell>
                    <TableCell>{user.title}</TableCell>
                    <TableCell>{user.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="d-flex justify-between">
            <button className="btn">Prev</button>
            <button className="btn">Next</button>
            </div>
          </>
            :
            <div className="alert alert-error mt-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>Error! API failed. Please reach out Admin</span>
            </div>
        }
      </main>
    </div>
  )
}

export default Issues