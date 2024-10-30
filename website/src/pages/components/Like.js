import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../services/AuthContext';
import "../../styles/Like.css";
import axios from 'axios';
import { toast } from "react-toastify";
import LikeInactive from "../../assets/Like-Inactive.svg"
import LikeActive from "../../assets/Like-Active.svg"


function Like(props) {
  const { login } = useContext(AuthContext);
  const [like, setLike] = useState(false);  
  const [nLike, setNLike] = useState(-1);  

  useEffect(() => {
      setLike(props?.likes.filter((row) => {
        return login?.id === row?.userId
      })[0]?.like)

      setNLike(props?.likes.filter((row) => {
        return row?.like === true
      })?.length)
  },
  [props?.likes])


  const changeLike = async () => {
    try {
      await axios.post(process.env.REACT_APP_SERVER_URL + "/postLikes", {
            like: !like,
            postId: props?.postId
        },
        {   
          headers: {
           authToken: localStorage.getItem("AuthToken"),
          },
        });
        setNLike(like ? nLike-1 : nLike+1)
        setLike(!like)
      
        /*toast.success("Hai messo like al post");*/
    } catch (error) {
      toast.error("Errore mentre metti like al post");
    }
  };

  return (
    <div>
        <button className="likeButton" onClick={() =>changeLike()}><img className="likeImg" src={like ? LikeActive : LikeInactive} alt={"Like"}/></button>
        <p>Likes: {nLike}</p>
    </div>
  )
}

export default Like