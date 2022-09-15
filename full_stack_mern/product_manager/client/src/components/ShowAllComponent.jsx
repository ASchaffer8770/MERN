import React from 'react'
import { Link } from'react-router-dom'


const ShowAllComponent = (props) => {


  return (
    <div>
        <h3>All Products:</h3>
            <p>
                {
                    props.products.map((eachProduct, i)=>{
                        return(
                            <p key={i}>
                                <Link to='/products/details'>
                                <p> {eachProduct.title}</p>
                                </Link>
                            </p>
                        )
                    })
                }
            </p>
    </div>
  )
}

export default ShowAllComponent