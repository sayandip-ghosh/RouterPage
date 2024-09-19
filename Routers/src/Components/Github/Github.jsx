import React, {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Github() {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch(`https://api.github.com/users/${userId}`)
        .then(response => response.json())
        .then(data => setData(data))
    },[])
    const {userId} = useParams()
  return (
    <div>
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="" />
      <div>User:{userId}</div>
    </div>
  )
}

export default Github
