import React, { useContext, useEffect, useState } from 'react';
import "../../styles/Post.css";
import axios from 'axios';
import { AuthContext } from '../../services/AuthContext';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import DateService from '../../services/DateService';
import Images from '../../services/Images';
import Like from './Like';
import CommentsSection from './CommentsSection';


function Post(props) {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (props?.username) {
      setUsername(props?.username);
    } else if (props?.post?.user?.username) {
      setUsername(props?.post?.user?.username);
    }

    
    if(props?.post?.postImage?.key) {
      onGetImage(props?.post?.postImage?.key);
      
      //console.log('image', props?.post?.postImage?.key)
    }

  }, [props]);

  const onGetImage = async (key) => {
    let getI = await Images.getPostImage(key);
    const imageBlob = new Blob([getI])
    console.log("get", imageBlob)
    setImage(imageBlob); 
    

    //setImage(await Images.getPostImage(key))
  }

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
    <div className='postdiv' id={props?.id}>
      <h3 className='posth3' >{props?.post?.title}</h3>

      {image ?
        <img className='postimg' src={URL.createObjectURL(image)} alt="Post Image"/>
        :
        <>Loading...</>

      }
      <div className='postdescriptiondiv' >{props?.post?.description}</div>
      <Like className='likeButton' postId={props?.post?.id} likes={props?.post?.postLikes}/>
      <button type="button" className="ButtonPost" onClick={() => {setToggle(!toggle)}}>
      Comments
      </button> {
        toggle ? <CommentsSection postId={props?.post?.id} />:<></>
      }
      
      <div>
        <button className='usernameButton' onClick={() =>navigate('/user/' + username)}>{username}</button>
      </div>
      <div className='postdatadiv'>{DateService.formatDate(props?.post?.createdAt)}</div>
      <p className='buttonDelete'>
        {login.username === username ? 
          <button className='deleteButton' onClick={onDelete}>Elimina</button> 
          : null}
      </p>
    </div>
  );
}

export default Post;
