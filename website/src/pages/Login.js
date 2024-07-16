import React from 'react';
import axios from 'axios';

import "../styles/Login.css";

function Login() {

  async function onSignUP(e) {
    e.preventDefault();

    console.log("E", e.target[0].value, e.target[1].value);

    let response = await axios.post(
      "http://localhost:5555/users", {
        email: e.target[0].value,
        password: e.target[1].value
      }
    )
    console.log(response.data);
  }

  return (
    <div className = "signUpPage" >
      <h1>FINSTAGRAM SIGN UP</h1>
      <form className = "inputContainer" onSubmit={onSignUP}>
        <div>
          <p>Email: </p>
          <input type = "email" id = "Email"/>
          <p>Password: </p>
          <input type = "password" id = "Password"/>
        </div>
        <button type = "submit" id = "Button">SIGN UP</button>
      </form> 
    </div>
  )
}

export default Login