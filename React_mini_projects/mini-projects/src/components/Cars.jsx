import React from 'react'

const Cars = ({details}) => {
  return (
      <>
     
  
    {details.title}<br/>
    <img src={details.url} alt="" srcset="" />
    
    </>
  )
}

export default Cars