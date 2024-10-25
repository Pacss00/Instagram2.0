import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../services/AuthContext";
import CreatePostForm from "./components/CreatePostForm";
import ShowPosts from "./components/ShowPosts";
import Menu from "./components/Menu";
import { toast } from "react-toastify"
import "../styles/Home.css";

function Home() {

    const {setLogin} = useContext(AuthContext);
    const [menu, setMenu] = useState("show");
    const navigates = useNavigate();

    const onLogout = () => {
        localStorage.removeItem("AuthToken")
        navigates("/entry");
        setLogin(false)
        
        toast.success("You have Logged Out")
    }

    return(
        <div>
            <div className="Home">
            <h1> FINSTAGRAM </h1>
            <h2>HOME</h2>
                <Menu setMenu={(value) => setMenu(value)} menu={menu}/>

                {
                    menu === "show"
                    ?
                    <ShowPosts/>
                    :
                    <CreatePostForm setMenu={() => setMenu("show")}/>
                }
                
            </div>
            
        </div>
    )
}

export default Home