import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'

// form input : onChange, useState
//form submit: handleSubmit
// send forData into api : axios
//Logic after create : useNavigate

const UpdateProduct = () => {

    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    //get info from the api to pre populate the form for editing
    const {id} =useParams()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
          .then(response =>{
            const product = response.data
            setTitle(product.title)
            setPrice(product.price)
            setDescription(product.description)
          })
          .catch(err => console.log(err))
      }, [])

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/products/${id}`, {title, price, description})
            .then(response => {
                navigate(`/products/${response.data._id}`)
            })
            .catch(err => console.log(err))
    }

    const handleDelete = (deleteId)=>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
          .then(response => {
            navigate('/')
          })
          .catch(err => console.log(err))
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
            <button onClick={()=>handleDelete()} className='btn btn-danger'>Delete</button>
        </form>
    <Link to={`/`} className='btn btn-primary'>Home</Link>
    </div>
  )
}

export default UpdateProduct