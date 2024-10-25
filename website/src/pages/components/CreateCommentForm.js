import React, { useState } from 'react' // rfce + invio
import axios from 'axios';
import { toast } from "react-toastify"

// import "../../styles/CreateCommentForm.css";

function CreateCommentForm(props) {

    const [comment, setComment] = useState("");
    const [title, setTitle] = useState("");
 
    const onCreateComment = async (e) => {
        e.preventDefault();

        let response = await axios.post("http://localhost:5555/postComments",
            {
                title: title,
                comment: comment,
                postId: props?.postId
            },
            {
                headers: {
                    authToken: localStorage.getItem("AuthToken")
                }
            }
            
        )
        setTitle("");
        setComment("");
        props.onCreate(response?.data)
        toast.success("Comment Created")
    }
    

  return (
    <form className="CommentForm" onSubmit={onCreateComment}>
        <h3> CREATE COMMENT </h3>
            <input type="text" placeholder="Title" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
            <textarea type="text" placeholder="Comment" value={comment} onChange={(e) => {setComment(e.target.value)}}/>
        <button className="PublishComment" type="submit"> Publish Comment</button>

    </form>
  )
}

export default CreateCommentForm