import React, { useState, useEffect }from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

// form input : onChange, useState
//form submit: handleSubmit
// send forData into api : axios
//Logic after create : useNavigate

const CreateForm = (props) => {
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [products, setProducts] = useState()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products`)
          .then(response =>{
            console.log(response.data)
            setProducts(response.data)
          })
          .catch(err => console.log(err))
      }, [props.products])

    const handleSubmit = (e)=>{
        e.preventDefault()
        //send form data into the api, if successful, redirect
        axios.post(`http://localhost:8000/api/products`, {title: title, price:price, description:description})
            .then(response=>{
                console.log(response)
            })
            .catch(err=>console.log(err))
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
            <button className='btn btn-primary'>Create</button>
        </form>
    </div>
  )
}

export default CreateForm