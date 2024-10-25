import React from 'react'
import Sorting from '../../services/Sorting';
import { useState } from 'react';
//import "../../styles/MenuSort.css";

function MenuSort() {
    const [posts, setPosts] = useState([]);

    
  return (
    <div className='MenuSort'> 
    <button className='menuButtonSort' onClick= {() => { 
        let orderedPosts = Sorting.sortPosts("newest", [...posts])
        setPosts(orderedPosts)}}>Newest</button>
    <button className='menuButtonSort' onClick= {() => { 
        let orderedPosts = Sorting.sortPosts("oldest", [...posts])
        setPosts(orderedPosts)}}>Oldest</button>  
    </div>
  )
}

export default MenuSort