import React, { useContext, useEffect, useState } from 'react';
import "../../styles/Comment.css";
import axios from 'axios';
import { AuthContext } from '../../services/AuthContext';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import DateService from '../../services/DateService';



function Comment(props) {
  const { login } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {

    if(props?.comment) {
      setLoading(false)
    }

    if (props?.username) {
      setUsername(props?.username);
    } else if (props?.comment?.user?.username) {
      setUsername(props?.comment?.user?.username);
    }
  }, [props]);

  const onDeleteComment = async () => {
    try {
      await axios.delete("http://localhost:5555/postComments/" + props?.comment?.id, {
        headers: {
          authToken: localStorage.getItem("AuthToken"),
        },
      });
      props.deleteComment(props?.comment?.id);
      toast.success("You have Deleted your Comment");
    } catch (error) {
      toast.error("Error, can't Delete this Comment");
    }
  };

  return (
    <div className='comment' id={props?.id}>
      <h4>{props?.comment?.title}</h4>
      <div>{props?.comment?.comment}</div>
      <div>
        <button onClick={() =>navigate('/user/' + username)}>{username}</button>
      </div>
      <div>{DateService.formatDate(props?.comment?.createdAt)}</div>
      <p>
        {login.username === username ? 
          <button className='deleteButton' onClick={onDeleteComment}>Elimina</button> 
          : null}
      </p>
      
    </div>
  );
}

export default Comment;

