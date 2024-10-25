import React from 'react' // rfce + invio
import { useEffect, useState } from 'react';
import MenuSortComments from "./MenuSortComments";
import Comment  from "./Comment";

// import "../../styles/ShowComments.css";

function ShowComments(props) {
  const [comments, setComments] = useState([]);
   

    useEffect(() => {
      if(props?.comments){
        setComments(props?.comments)
      }
    }, [props])

    const deleteComment = (id) => {
      setComments(
        comments.filter((comment) => comment.id !== id)
      )

    }

    

  return (
    <div className="ShowComment">
        <h2> COMMENTS </h2>
        <p>{comments.length}</p>
        <MenuSortComments/>
        { comments?.map((comment, key) => {

            return (
                <Comment comment={comment} id={key} deleteComment={deleteComment}/>
            )
        })

        }

           
    </div>
  )
}

export default ShowComments