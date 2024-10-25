import React from 'react'
import Sorting from '../../services/Sorting';
import { useState } from 'react';
//import "../../styles/MenuSort.css";

function MenuSortComments() {
    const [comments, setComments] = useState([]);

    
  return (
    <div className='MenuSortCommments'> 
    <button className='menuButtonSortComments' onClick= {() => { 
        let orderedComments = Sorting.sortComments("newest", [...comments])
        setComments(orderedComments)}}>Newest</button>
    <button className='menuButtonSortComments' onClick= {() => { 
        let orderedComments = Sorting.sortComments("oldest", [...comments])
        setComments(orderedComments)}}>Oldest</button>  
    </div>
  )
}

export default MenuSortComments