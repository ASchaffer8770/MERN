import React, {useState} from 'react'
import {Link , useNavigate} from 'react-router-dom'
import axios from 'axios'

//form input : useState
//form submit :handleSubmit
//after submit, post to backend : axios
//logic after create : useNavigate


const CreateAuthor = () => {

    const navigate = useNavigate()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const [errors, setErrors] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        //send all info to api
        axios.post(`http://localhost:8000/api/author`, {firstName : firstName, lastName : lastName})
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
        <h5 className='text-success'>Add a new Author:</h5>
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
                    <button type='submit' className='btn btn-primary'>Submit</button>
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

export default CreateAuthor