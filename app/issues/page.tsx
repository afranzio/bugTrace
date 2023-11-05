import React from 'react'

// Dependencies
import { Table } from '@radix-ui/themes'
import DropDownMenu from '../components/dropdown/dropdown'


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


  const dateConversion = (date: string) => {
    var dateTime = new Date(date);
    return dateTime.toLocaleString();
  }

  return (
    <div>
      <main className="container w-full md:w-1/2">
        <h2 className="text-xl border-b border-gray-900/10 pb-3 font-semibold leading-7 text-gray-900 subpixel-antialiased">Issues</h2>
        {
          data.length > 0 ?
            <Table.Root variant="surface" className="table table-bordered">
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {data.map(user => <Table.Row key={user.id} >
                  <Table.Cell className="capitalize">
                    <DropDownMenu userStatus={user} />
                  </Table.Cell>
                  <Table.RowHeaderCell className="capitalize">{user.title}</Table.RowHeaderCell>
                  <Table.Cell>{user.description}</Table.Cell>
                </Table.Row>)}
              </Table.Body>
            </Table.Root>
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