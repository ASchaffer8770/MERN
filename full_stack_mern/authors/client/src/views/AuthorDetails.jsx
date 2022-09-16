import React, { useState, useEffect } from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'

//get id from params : useParams
//using id get info from api when component is loaded : axios useEffect
//variables change so we need : useState

const AuthorDetails = () => {

    const {id} = useParams()
    const [author, setAuthor] = useState()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then(response => {
                console.log(response.data)
                setAuthor(response.data)
            })
            .catch(err=>console.log(err))
    },[])


  return (
    <div>
        {
            author?
            <div>
                <h4>First Name: {author.firstName}</h4>
                <h4>Last Name: {author.lastName}</h4>
            </div>:
            <h1>invalid id number</h1>
        }

        <Link to='/' className='btn btn-primary'>Home</Link>
    </div>
  )
}

export default AuthorDetails