import React from 'react'
import PostContext from '../context/PostContext'
import { useState } from 'react'
import { useContext } from 'react'

const Post = () => {

    const [food,setFood] = useState('')
    const [cloth,setCloth] = useState('')
    const {setPost} = useContext(PostContext);

    let handleSubmit =(e)=>{
        e.preventDefault();
        setPost({food,cloth});
    }
  return (
    <div>
      <input 
      type="text" 
      value={food}
      onChange={(e)=>setFood(e.target.value)}
      placeholder='give food name'
      />
      <br />
      <input 
      type="text" 
      value={cloth}
      onChange={(e)=>setCloth(e.target.value)}
      placeholder='give cloth name'
      />

      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Post
