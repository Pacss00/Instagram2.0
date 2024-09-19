import React from 'react';
import axios from 'axios';

import "../../styles/Login.css";

import Validation from "../../services/Validation";
function Login(props) {

  async function onSignUP(e) {
    e.preventDefault();

    console.log("E", e.target[0].value, e.target[1].value, e.target[2].value);

    if(Validation.isEmail)(e.target[0].value,e.target[1].value, e.target[2].value);

  }

  return (
    <div className = "signUpPage" >
      <h1>FINSTAGRAM LOGIN</h1>
      <form className = "inputContainer" onSubmit={onSignUP}>
        <div>
          <p>Email: </p>
          <input type = "email" id = "Email"/>
          <p>Password: </p>
          <input type = "password" id = "Password"/>
          <p>Username: </p>
          <input type = "text" id = "Username"/>
        </div>
        <button type = "submit" id = "Button">LOGIN</button>
        <button type = "button" onClick={() => props.changeToSignUp()}>Sign Up</button>
      </form> 
    </div>
  )
}

export default Login