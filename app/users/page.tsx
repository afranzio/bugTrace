import React from 'react'

interface User {
  "id": number,
  "name": string,
}

async function UserPage() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {next: {revalidate: 10}, cache: 'no-store'})
  const data:User[] = await response.json();

  return (
    <main>   
      <h1>Users</h1>
      <ul>
        {data.map(user => <li key={user.id}> {user.name} </li>)}
      </ul>
    </main>
  )
}

export default UserPage