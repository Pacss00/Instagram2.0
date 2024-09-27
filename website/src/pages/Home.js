import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../services/AuthContext";
import "../styles/Home.css";

function Home() {

    const {login, setLogin} = useContext(AuthContext);
    const navigates = useNavigate();

    const onLogout = () => {
        localStorage.removeItem("AuthToken")
        navigates("/entry");
        setLogin(false)

    }

    return(
        <div>
            <h1>Home</h1>
            <div className="Home">
                <p>
                    {login ? " Logged In" : "Logged Out"}
                </p>
                <button type="button"
                onClick={onLogout}
                >LogOut</button>
            </div>
            
        </div>
    )
}

export default Home