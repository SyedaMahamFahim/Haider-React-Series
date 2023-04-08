import React from 'react'

const User = ({userName}) => {
  return (
    <h1 style={{
      backgroundColor:"red",
      color:"white"
    }}>My Name is {userName}</h1>
  )
}

export default User