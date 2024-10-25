import React, { useState } from 'react' // rfce + invio
import axios from 'axios';
import { toast } from "react-toastify"
import "../../styles/CreatePostForm.css";

function CreatePostForm() {
    const [image, setImage] = useState({});
 
    const onCreatePost = async (e) => {
        e.preventDefault();


        let response = await axios.post("http://localhost:5555/posts",
            {
                title: e.target[0].value,
                description: e.target[1].value
            },
            {
                headers: {
                    authToken: localStorage.getItem("AuthToken")
                }
            }
            
        )

        if(response?.data) {

            console.log(image);
            const data = new FormData();
            data.append('file', image)

            let imageResponse = await axios.post("http://localhost:5555/images/upload",
                data,
                {
                    headers: {
                        authToken: localStorage.getItem("AuthToken")
                    }
                }
            )
        }

        toast.success("Post Created")
    }


    const onSetImage = (e) => {
        setImage(e.target.files[0]);
    }
    

  return (
    <form className="PostForm" onSubmit={onCreatePost}>
        <h2> CREATE POST </h2>
            <input type="text" placeholder="Title"/>
            <textarea type="text" placeholder="Description" />
            <input type="file" accept="image/png, image/jpg" onChange={onSetImage} />
        <button id="Publish" type="submit"> Publish </button>

    </form>
  )
}

export default CreatePostForm