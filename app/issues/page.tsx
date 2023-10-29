import React from 'react'

interface Issue {
  "id": number,
  "title": string,
  "description": string,
  "createdAt": string,
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