import React, { useEffect, useState }from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

//need id from params : useParams()
//use id to get info from api : axios
//display info on load : useEffect()
//variables that change : useState

const ProductDetails = () => {
  //1 get id from params
  const {id} = useParams()
  const [products, setProducts] = useState()
  //2 get info from api on load
  useEffect(()=>{
    axios.get(`http://localhost:8000/api/products/${id}`)
      .then(response =>{
        console.log(response.data)
        setProducts(response.data)
      })
      .catch(err => console.log(err))
  }, [])


  return (
    <div>
      {
        products&&
        <div>
          <h2> { products.title } </h2>
          <h3>$ { products.price }</h3>
          <p> { products.description }</p>
        </div>
      }
        <div>
            <Link to="/" className='btn btn-primary'>Home</Link>
        </div>
    </div>
  )
}

export default ProductDetails