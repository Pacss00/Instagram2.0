import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Post from './components/Post';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import HomeBlackInactive from "../assets/HomeBlack-Inactive.svg"
import HomeWhiteActive from "../assets/HomeWhite-Active.svg"

function UserProfile(props) {
    const {username} = useParams();
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        /*console.log("Username", username);*/
        fetchData();
    }, [username])

    const fetchData = async () => {
        let response = await axios.get("http://localhost:5555/posts/" + username,
        {
            headers: {
            authToken: localStorage.getItem("AuthToken")
            }
        }
        
    )
    setPosts(response?.data);
}


  return (
    <div className="UserProfile">

        <p classname="Username">Username: {username}</p>
                
      <div className="ShowPost">
        <h2> POSTS </h2>
        <div>
        <button onClick={() =>navigate(-1)}> <img src={props.menu === "show" ? HomeWhiteActive : HomeBlackInactive} alt={"Home"}/></button>
      </div>
        { posts?.map((post, key) => {

            return (
                <Post post={post} id={key} username={username}/>
            )
        })

        }
      </div>  
    </div>
    
  )
}

export default UserProfile