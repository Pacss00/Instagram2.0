import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../services/AuthContext';
import ShowComments  from "./ShowComments";
import CreateCommentForm from "./CreateCommentForm";
import axios from 'axios';
import Sorting from '../../services/Sorting';
import "../../styles/CommentSection.css";

function CommentsSection(props) {
  const { login } = useContext(AuthContext);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(false);


  useEffect(() => {
    getAllComments();
  },[])

  const getAllComments = async () => {

    let response = await axios.get(process.env.REACT_APP_SERVER_URL + "/postComments/" + props?.postId , { headers: { authToken: localStorage.getItem("AuthToken")}})

    console.log("res", response?.data);

    if(response?.data?.error) {
        console.log(response.data.error)
      } else if (response?.data){
        setComments(Sorting.sortComments("newest", response.data));
        
      }
      setLoading(false);
  }

  const onCreate = (comment) => {
    setComments(
      [
        {
          ...comment,
          user: {
            username: login.username
          }
        } 
        , ...comments
      ]
    )

  }

  if(loading) {
    return <></>
  }

  return (
    <div className="CommentSection">
        <CreateCommentForm postId={props?.postId}  onCreate={onCreate}/>
        <button type="button" className="ButtonPost" onClick={() => {setToggle(!toggle)}}>
          SHOW COMMENT
        </button> {
          toggle ?  <ShowComments postId={props?.postId} comments={comments} /> :<></>
        }
        
    </div>
  )
}

export default CommentsSection