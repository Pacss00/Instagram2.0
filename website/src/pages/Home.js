import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../services/AuthContext";
import "../styles/Home.css";

function Home() {

    const {login} = useContext(AuthContext);
    const navigates = useNavigate();

    return(
        <div>
            <h1>Home</h1>
            <div className="Home">
                <p>
                    {login ? " Logged In" : "Logged Out"}
                </p>
                <button type="button"
                onClick={() => {localStorage.removeItem("login"); 
                    navigates("/entry");
                }}
                >LogOut</button>
            </div>
            
        </div>
    )
}

export default Home