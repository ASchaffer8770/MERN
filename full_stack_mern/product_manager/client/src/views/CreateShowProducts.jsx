import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ShowAllComponent from '../components/ShowAllComponent'
import CreateForm from '../components/CreateForm'

const CreateShowProducts = () => {
    const [products, setProducts] = useState() 

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products`)
        .then(response=>{
            setProducts(response.data)
        })
        .catch(err=>console.log(err))
    },[])

  return (
    <div>
        
        <div>
            <CreateForm />
        </div>
        <div>
            {
                products?
                <ShowAllComponent products = {products}/>:
                <h1>No Products to Display</h1>
            }
        </div>
    </div>
  )
}

export default CreateShowProducts