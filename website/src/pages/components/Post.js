import React, { useContext, useEffect, useState } from 'react';
import "../../styles/Post.css";
import axios from 'axios';
import { AuthContext } from '../../services/AuthContext';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import DateService from '../../services/DateService';
import Like from './Like';
import CommentsSection from './CommentsSection';


function Post(props) {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (props?.username) {
      setUsername(props?.username);
    } else if (props?.post?.user?.username) {
      setUsername(props?.post?.user?.username);
    }
  }, [props]);

  const onDelete = async () => {
    try {
      await axios.delete("http://localhost:5555/posts/" + props?.post?.id, {
        headers: {
          authToken: localStorage.getItem("AuthToken"),
        },
      });
      props.deletePost(props?.post?.id);
      toast.success("Hai eliminato il tuo post");
    } catch (error) {
      toast.error("Errore durante l'eliminazione del post");
    }
  };

  return (
    <div className='post' id={props?.id}>
      <h3>{props?.post?.title}</h3>
      <div>{props?.post?.description}</div>
      <Like postId={props?.post?.id} likes={props?.post?.postLikes}/>
      <button type="button" className="ButtonPost" onClick={() => {setToggle(!toggle)}}>
      Comments
      </button> {
        toggle ? <CommentsSection postId={props?.post?.id} />:<></>
      }
      
      <div>
        <button onClick={() =>navigate('/user/' + username)}>{username}</button>
      </div>
      <div>{DateService.formatDate(props?.post?.createdAt)}</div>
      <p>
        {login.username === username ? 
          <button className='deleteButton' onClick={onDelete}>Elimina</button> 
          : null}
      </p>
    </div>
  );
}

export default Post;
