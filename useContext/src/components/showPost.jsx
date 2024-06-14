import React from 'react'
import PostContext from '../context/PostContext';
import { useContext } from 'react'

const ShowPost = () => {

    const {post} = useContext(PostContext);

    if(!post) return <h1> no post</h1>
  return (
    <div>
      
            post is - {post.food} and {post.cloth}
       
    </div>
  )
}

export default ShowPost
