import React, {useContext} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../../services/AuthContext";
import "../../styles/Login.css"
import Validation from '../../services/Validation'


function Login(props) {

    const navigates = useNavigate();
    const {setLogin} = useContext(AuthContext);

     async function onLogin(e)  {
    
      e.preventDefault();

      console.log("E", e.target[0].value , e.target[1].value);

      if(!e.target[0].value){
        console.log("put your username")
        return;
      }

      if(!e.target[1].value){
        console.log("put your password")
        return;
      }

      let response = await axios.post(process.env.REACT_APP_SERVER_URL + "/users/login",
        {
          ...(Validation.isEmail(e.target[0].value) ? {email:e.target[0].value} : {username: e.target[0].value}),
          password: e.target[1].value
        }
      )

      if(response?.data?.error) {
        console.log("Error", response.data.error);
      } else if(response?.data?.status) {
        setLogin({
          username: response?.data?.username,
          email: response?.data?.email,
          staus: response?.data?.status,
        })
        
        localStorage.setItem("AuthToken", response?.data?.authToken)
        navigates("/home");
      }
     
    }
    return (
      <form className="Login" onSubmit={onLogin}>
            <h1> FINSTAGRAM </h1>
            <h2> LOGIN </h2>
             <input type="text" placeholder="Email o Username"/>
             <input type="password" placeholder="Password" />
            <button type="submit" className="loginButton"> LOGIN </button>
            <button type="button" className='signUpLoginButton' onClick={() => props.changeToSignUp()}>SignUp</button>
      </form>
    )
}

export default Login