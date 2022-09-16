import React, {useState, useEffect} from 'react'
import {Link , useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'


//get id from params : useParams
//use 

const UpdateAuthor = () => {

  const {id} = useParams()
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [errors, setErrors] = useState([])

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/author/${id}`)
        .then(response => {
            console.log(response.data)
            const author = response.data
            setFirstName(author.firstName)
            setLastName(author.lastName)
        })
        .catch(err=>console.log(err))
},[])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:8000/api/author/${id}`, {firstName : firstName, lastName : lastName})
      .then(response => {
      console.log(response.data)
      navigate("/")
  })
      .catch(err=>{
        const errorResponseData = err.response.data.errors
        console.log(errorResponseData)
        const errMsgArr = []
        for(const eachKey in errorResponseData){
          errMsgArr.push(errorResponseData[eachKey].message)
      }
      setErrors(errMsgArr)
  })
  }
  return (
    <div>
      <Link to='/' className='btn btn-primary'>Home</Link>
      <h5 className='text-warning'>Edit this Author:</h5>
      <div className='card d-grid gap-3'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='form-label'> First Name: </label>
                    <input type="text" className='form-control' name='firstName' onChange={(e)=>setFirstName(e.target.value)} value={firstName}/>
                </div>
                <div>
                    <label className='form-label'> Last Name: </label>
                    <input type="text" className='form-control' name='lastName' onChange={(e)=>setLastName(e.target.value)} value={lastName}/>
                </div>
                <div className='d-flex justify-content-around '>
                    <Link to='/' className='btn btn-warning'>Cancel</Link>
                    <button type='submit' className='btn btn-primary'>Edit Author</button>
                </div>
            </form>
            {
                errors.map((eachErr, i)=>(
                    <p key ={i} style={{color: "red"}}> {eachErr} </p>
                ))
            }
        </div>

      
    </div>
  )
}

export default UpdateAuthor