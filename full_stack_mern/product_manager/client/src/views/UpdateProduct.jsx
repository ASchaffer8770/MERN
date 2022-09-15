import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

// form input : onChange, useState
//form submit: handleSubmit
// send forData into api : axios
//Logic after create : useNavigate

const UpdateProduct = () => {

    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [products, setProducts] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()

    }


  return (
    <div>
                <form onSubmit={handleSubmit}>
            <div>
                <label>Title: </label>
                <input type="text" name="title" value={title}
                     onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div>
                <label>Price: </label>
                <input type="text" name="price" value={price}
                     onChange={(e)=>setPrice(e.target.value)}/>
            </div>
            <div>
                <label>Description: </label>
                <input type="text" name="description" value={description}
                     onChange={(e)=>setDescription(e.target.value)}/>
            </div>
            <button type="submit" className='btn btn-warning'>Update</button>
            <Link to={`/`} className='btn btn-danger'> Delete </Link>
        </form>
    <Link to={`/`} className='btn btn-primary'>Home</Link>
    </div>
  )
}

export default UpdateProduct