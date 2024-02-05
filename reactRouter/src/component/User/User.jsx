import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {UserId} = useParams()
  return (
    <div className='bg-black text-center text-white'>User :  {UserId}</div>
  )
}

export default User