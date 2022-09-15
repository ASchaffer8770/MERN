import React from 'react'
import { Link } from'react-router-dom'


const ShowAllComponent = (props) => {


  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.products.map((eachProduct, i)=>{
                        return (
                            <tr key={i}>
                                <td><Link to={`/products/${eachProduct._id}`}> {eachProduct.title}</Link></td>
                                <td><Link to={`/products/edit/${eachProduct._id}`}> Edit </Link></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default ShowAllComponent