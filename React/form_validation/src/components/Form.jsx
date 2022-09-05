import React, { useState } from 'react'

const Form = () => {
    const[firstName, setfirstName] = useState("")
    const[lastName, setlastName] = useState("")
    const[email, setemail] = useState("")
    const[hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

    const createUser = (e) => {
        e.preventDefault()
        if(firstName.length < 3 && lastName.length < 3 && email.length < 5) {
            const newUser = {firstName: firstName, lastName: lastName, email: email}
            setHasBeenSubmitted(true)
        } else {
            alert("Invalid Form")
        }
    }

  return (
    <div>
        <form onSubmit={ createUser }>
            <div>
                <label>First Name</label>
            </div>
            <div>
                <input type="text" name="firstName" value={firstName} onChange = {(e) => setfirstName(e.target.value)} />
                <div>
                        {
                            firstName.length < 3 && //Ternary Operator to create validation on the form
                            <span style = {{color: "red"}}>First Name must be more than 2 Characters</span>
                        }
                </div>
            </div>
            <div>
                <label>Last Name</label>
            </div>
            <div>
                <input type="text" name="lastName" value={lastName} onChange = {(e) => setlastName(e.target.value)}/>
                    <div>
                        {
                            lastName.length < 3 && //Ternary Operator to create validation on the form
                            <span style = {{color: "red"}}>Last Name must be more than 2 Characters</span>
                        }
                    </div>
            </div>
            <div>
                <label>Email</label>
            </div>
            <div>
                <input type="text" name="Email" value= {email} onChange = {(e) => setemail(e.target.value)} />
                    <div>
                        {
                            email.length < 5 && //Ternary Operator to create validation on the form
                            <span style = {{color: "red"}}>Email must be more than 5 Characters</span>
                        }
                    </div>
            </div>
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default Form