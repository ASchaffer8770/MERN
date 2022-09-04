import React, { useState } from 'react'

const Form1 = () => {
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")

    return (
        <div>
             <h1>Hook Form</h1>
                <form>
                    <div>
                        <label>First Name: </label> 
                        <input type="text" name='firstName' value= {firstName} onChange={(e) => setfirstName(e.target.value)} />
                    </div>
                    <div>
                        <label>Last Name: </label> 
                        <input type="text" name='lastName' value={lastName} onChange={(e) => setlastName(e.target.value)} />
                    </div>
                    <div>
                        <label>Email: </label>
                        <input type="text" name ='email' value={email} onChange = {(e)=> setemail(e.target.value)}/>
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type="password" name='password' value={password} onChange = {(e) => setpassword(e.target.value)} />
                    </div>
                    <div>
                        <label>Confirm Password: </label>
                        <input type="password" name='confirmPassword' value={confirmPassword} onChange = {(e) => setconfirmPassword(e.target.value)} />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
        </div>
  )
}

export default Form1