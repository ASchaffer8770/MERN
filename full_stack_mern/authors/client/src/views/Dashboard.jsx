import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

//get data from api when mounting component : axios, useEffect
//author list will be updated after api call : useState
//variables change
//joblist wil change on dashboard without refresh : display arr using .map()

const Dashboard = () => {

    const [authorList, setAuthorList] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/author`)
            .then(response=>{
                console.log(response.data)
                setAuthorList(response.data)
                })
            .catch(err=>console.log(err))
    },[])

    const handleDelete = (deleteId) => {
        axios.delete(`http://localhost:8000/api/author/${deleteId}`)
            .then(respone=>{
                const filterList = authorList.filter((author)=>author._id !== deleteId)
                setAuthorList(filterList)
            })
            .catch(err=>console.log(err))
    }

  return (
    <div>
        <Link to='/new' className='btn btn-success'>Add an Author</Link>
        <h5 className='text-success'>We have quotes by:</h5>
        <table className='table table-secondary'>
            <thead>
                <tr>
                    <th>Author</th>
                    <th colSpan={2}>Actions Available</th>
                </tr>
            </thead>
            <tbody>
                {
                    authorList.map((eachAuthor, i)=>{
                        return(
                            <tr key={i}>
                                <td>{eachAuthor.firstName} {eachAuthor.lastName}</td>
                                {/* to create a details page add link to the td */}
                                <td><Link to={`/edit/${eachAuthor._id}`} className='btn btn-warning'>Edit</Link></td>
                                <td><button onClick={()=>handleDelete(eachAuthor._id)} className='btn btn-danger'>Delete</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

    </div>
  )
}

export default Dashboard