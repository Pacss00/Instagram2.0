import React from 'react';
import axios from 'axios';

import "../../styles/SignUp.css";
//import "../../styles/Login.css";

function SignUp(props) {

  async function onSignUP(e) {
    e.preventDefault();

    console.log("E", e.target[0].value, e.target[1].value, e.target[2].value);

    let response = await axios.post(
      "http://localhost:5555/users", {
        email: e.target[0].value,
        password: e.target[1].value,
        username: e.target[2].value
      }
    )
    console.log(response.data);
  }

  return (
    <div className = "signUpPage" >
      <h1>FINSTAGRAM </h1>
      <h2> SIGN UP</h2>
      <form className = "inputContainer" onSubmit={onSignUP}>
        <div>
          <p>Email: </p>
          <input type = "email" id = "Email"/>
          <p>Password: </p>
          <input type = "password" id = "Password"/>
          <p>Username: </p>
          <input type = "text" id = "Username"/>
        </div>
        <button type = "submit" className='signUpButton'>SIGN UP</button>
        <button type = "button" className='loginSignUpButton'onClick={() => props.changeToLogin()}>Log In</button>
      </form> 
    </div>
  )
}

export default SignUp