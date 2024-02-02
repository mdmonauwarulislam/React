import React from 'react'

function Card({username = "Name", btnText = 'Click'}) {
  return (
        <div className="bg-black-100 m-4 p-4 w-64 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold">{username}</h1>
            <button className="bg-blue-500 text-green p-2 rounded-lg mt-4">{btnText}</button>
        </div>   
    
  )
}

export default Card