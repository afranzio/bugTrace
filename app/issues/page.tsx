import React from 'react'

interface Issue {
  "id": number,
  "title": string,
  "description": string,
  "createdAt": string,
}

const Issues = async () => {

  const response = await fetch('http://localhost:3000/api/issues', { cache: 'no-store' })
  const data: Issue[] = await response.json();

  const dateConversion = (date: string) => {
    var dateTime = new Date(date);
    return dateTime.toLocaleString();
  }

  return (
    <div>
      <main className="container w-full md:w-1/2">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Title</th>
              <th>Created At</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {data.map(user => <tr key={user.id}>
              <td className="capitalize" >{user.title}</td>
              <td>{dateConversion(user.createdAt)}</td>
              <td>{user.description}</td>
            </tr>)}
          </tbody>
        </table>
      </main>
    </div>
  )
}

export default Issues