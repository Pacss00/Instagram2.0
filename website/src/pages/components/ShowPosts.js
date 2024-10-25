import React from 'react' // rfce + invio
import axios from 'axios';
import { useEffect, useState } from 'react';
import Sorting from '../../services/Sorting';
import MenuSort from "./MenuSort";
import Post  from "./Post";

import "../../styles/ShowPost.css";

function ShowPosts() {
  const [posts, setPosts] = useState(false);
  const [loading, setLoading] = useState(true);
  const [ order, setOrder ] = useState("newest");

    useEffect(() => {
        getAllPosts();
    },[])
 
    const getAllPosts = async () => {

        let response = await axios.get("http://localhost:5555/posts", { headers: { authToken: localStorage.getItem("AuthToken")}})

        console.log("res", response?.data);

        if(response?.data?.error) {
            console.log(response.data.error)
          } else if (response?.data){
            setPosts(Sorting.sortPosts(order, response.data));
            
          }
          setLoading(false);
    }

    const deletePost = (id) => {
      setPosts(
        posts.filter((post) => post.id !== id)
      )

    }

    if(loading) {
        return <></>
    }

  return (
    <div className="ShowPost">
        <h2> POSTS </h2>
        <MenuSort/>
        { posts?.map((post, key) => {

            return (
                <Post post={post} id={key} deletePost={deletePost}/>
            )
        })

        }

           
    </div>
  )
}

export default ShowPosts