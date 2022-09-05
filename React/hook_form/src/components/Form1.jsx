import React, { useState } from 'react'


const Form1 = () => {
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

    const createUser = (e) => {
        e.preventDefault()
        // LINE 15 IS FORM VALIDATION
        if(firstName.length > 3 && lastName.length > 3 && email.length > 5 && password.length === confirmPassword.length) {
        const newUser = {firstName: firstName, lastName: lastName, email: email, password: password, confirmPassword: confirmPassword}
        console.log("Created", newUser) //sends info to backend instead of console logging
        setHasBeenSubmitted(true) //sets state to true after beign submitted
        } else {
            alert("Invalid Form")
        }
        
    }

    const formMessage = (e) => {
        if (hasBeenSubmitted) {
            return "Thank you! Form Has Been Submitted"
        } else {
            return "Please Enter Your Information"
            }
        
    }

    return (
        <div>
             <h1>{formMessage ()}</h1>
                <form onSubmit={ createUser }>
                    <div>
                        <label>First Name: </label> 
                        <input type="text" name='firstName' value= {firstName} onChange={(e) => setfirstName(e.target.value)} />
                    </div>
                    <div>
                        {
                            firstName.length < 3 && //Ternary Operator to create validation on the form
                            <span style = {{color: "red"}}>First Name must be more than 2 Characters</span>
                        }
                    </div>
                    <div>
                        <label>Last Name: </label> 
                        <input type="text" name='lastName' value={lastName} onChange={(e) => setlastName(e.target.value)} />
                    </div>
                    <div>
                        {
                            lastName.length < 3 && //Ternary Operator to create validation on the form
                            <span style = {{color: "red"}}>First Name must be more than 2 Characters</span>
                        }
                    </div>
                    <div>
                        <label>Email: </label>
                        <input type="text" name ='email' value={email} onChange = {(e)=> setemail(e.target.value)}/>
                    </div>
                    <div>
                        {
                            email.length < 6 && //Ternary Operator to create validation on the form
                            <span style = {{color: "red"}}>Email must be more than 5 Characters</span>
                        }
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type="password" name='password' value={password} onChange = {(e) => setpassword(e.target.value)} />
                    </div>
                    <div>
                        {
                            password.length < 8 && //Ternary Operator to create validation on the form
                            <span style = {{color: "red"}}>Password must be more than 8 Characters</span>
                        }
                    </div>
                    <div>
                        <label>Confirm Password: </label>
                        <input type="password" name='confirmPassword' value={confirmPassword} onChange = {(e) => setconfirmPassword(e.target.value)} />
                    </div>
                    <div>
                        {
                            confirmPassword.length < 8 && //Ternary Operator to create validation on the form
                            <span style = {{color: "red"}}>Passwords must match</span>
                        }
                    </div>
                    <input type="submit" value="Create User" />
                </form>
        </div>
  )
}

export default Form1