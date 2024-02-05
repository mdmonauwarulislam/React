import React, { useEffect, useState } from 'react'

function Github() {
    const [data, SetData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/mdmonauwarulislam')
        .then(response => response.json())
        .then(data =>{
            SetData(data)
        })
      
    }, [])
    

  return (
    < div className='bg-black'>
    <img width={300} height={300}  src={data.avatar_url } alt=" Gitpic" />
    <div className='text-center bg-black text-white'>Github Follower : {data.followers}</div>
    
    </div>
  )
}

export default Github