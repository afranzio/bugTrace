import React from 'react'

interface User {
  "id": number,
  "name": string,
  "email": string,
}

async function UserPage() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', { next: { revalidate: 10 }, cache: 'no-store' })
  const data: User[] = await response.json();

  return (
    <main>
      <h1>Users</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map(user => <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>)}
        </tbody>
      </table>
    </main>
  )
}

export default UserPage