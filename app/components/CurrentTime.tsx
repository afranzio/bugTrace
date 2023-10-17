import React from 'react'

const CurrentTime = () => {
  return (
    <div>{new Date().toLocaleTimeString()}</div>
  )
}

export default CurrentTime