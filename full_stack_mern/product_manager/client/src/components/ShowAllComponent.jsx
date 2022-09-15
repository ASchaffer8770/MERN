import React, {useEffect} from 'react'
import axios from 'axios'
import { Link, useParams, useNavigate } from'react-router-dom'


const ShowAllComponent = (props) => {

    const navigate = useNavigate()
    const {id} = useParams()
    
    const handleDelete = (deleteId)=>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
          .then(response => {
            navigate('/')
          })
          .catch(err => console.log(err))
      }

  return (
    <div>
        <table className="table table-striped">
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
                                <td><Link to={`/products/edit/${eachProduct._id}`} className='btn btn-warning'> Edit </Link></td>
                                <td><button onClick={()=>handleDelete()} className='btn btn-danger'>Delete</button></td>
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