import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import HomeBlackInactive from "../../assets/HomeBlack-Inactive.svg"
import HomeWhiteActive from "../../assets/HomeWhite-Active.svg"
import Logout from "../../assets/Logout.svg"
import { AuthContext } from"../../services/AuthContext"
import { toast } from "react-toastify"
import "../../styles/Menu.css";

function Menu(props) {
  const {setLogin} = useContext(AuthContext);
  const navigate = useNavigate();


  const onLogout = () => {
    localStorage.removeItem("AuthToken")
    navigate("/entry");
    setLogin(false)
    
    toast.success("You have Logged Out")
}

  return (
    <div className='Menu'>
      <button className='menuButtonWithImg' onClick={() =>navigate(-1)}> <img className="buttonMenuImg" src={props.menu === "show" ? HomeBlackInactive :  HomeWhiteActive} alt={"Home"}/></button>
      <button className='menuButton' onClick={() => {props.setMenu("show")}}>Show</button>
      <button className='menuButton' onClick={() => {props.setMenu("create")}}>Create</button>  
      <button type="button" className="menuButtonLogOut" onClick={onLogout}><img className="buttonMenuImg" src={Logout} alt={"Logout"}/></button>
    </div>
  )
}

export default Menu