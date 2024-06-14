import React from 'react'
import PostContext from './PostContext'
import { useState } from 'react'

const PostContextProvider = ({children}) => {
    const [post,setPost] = useState(null)
  return (
    <PostContext.Provider value={{post,setPost}}>
      {children}
    </PostContext.Provider>
  )
}

export default PostContextProvider
