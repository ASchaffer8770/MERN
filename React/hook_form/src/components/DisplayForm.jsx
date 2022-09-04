import React from 'react'

const DisplayForm = (props) => {
  return (
    <div>
        <h3> Form Data </h3>
        <p> First Name : {props.firstName} </p>
        <p> Last Name : {props.lastName} </p>
        <p> Email : {props.email} </p>
        <p> Password : {props.password} </p>
        <p> Confirmed Password : {props.confirmPassword} </p>
    </div>
  )
}

export default DisplayForm