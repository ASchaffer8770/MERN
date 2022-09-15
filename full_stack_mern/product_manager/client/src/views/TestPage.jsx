import React, { useState, useEffect } from 'react'
import axios from 'axios'


//get info from the API : axios
//get info when the component is mounted : useEffect
//variables will change : useState

const TestPage = () => {
  const [message, setMessage] = useState("")

  useEffect(() => {
    axios.get(`http://localhost:8000/api/test`)
      .then(response=>{
        console.log(response)
        setMessage(response.data.message)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <h1>Message : {message} </h1>
    </div>
  )
}

export default TestPage