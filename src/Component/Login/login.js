import React, { useState } from "react";
import './login.css';
function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [emailErr, setEmailErr] = useState(false)
    const [passwordErr, setPasswordErr] = useState(false)
    function Validate() {
        if (email.trim().length === 0) {
            setEmailErr(true)
        } else {
            setEmailErr(false)
        }
        if (password.trim.length === 0) {
            setPasswordErr(true)
        } else {
            setPasswordErr(false)
        }
    }
    return (
        <div className="login">

            <form id="container">
                <h1>LOGIN</h1>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input><br></br>
                {emailErr && <p>*please enter your email</p>}<br></br>
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input><br></br>
                {passwordErr && <p>*please enter your correct password</p>}<br></br>
                <button id="btn" onClick={Validate}>Login</button>

            </form>
        </div>
    )

}
export default Login