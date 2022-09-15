import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ShowAllComponent from '../components/ShowAllComponent'

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
            <form action="">
                <div>
                    <label htmlFor="">Title:</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Price:</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Description:</label>
                    <input type="text-area" />
                </div>
                <input type="button" value="Submit" className='btn btn-primary'/>
            </form>
        </div>
        <div>
            <ShowAllComponent products = {products}/>
            <p>
                <Link to='/products/details'>Detail Dummy Link</Link>
            </p>
        </div>
    </div>
  )
}

export default CreateShowProducts