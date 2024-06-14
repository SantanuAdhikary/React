import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
import Post from './components/Post'
import ShowPost from './components/showPost'
import PostContextProvider from './context/PostContextProvider'

const App = () => {
  return (
    // <UserContextProvider>
    //   <Login/>
    //   <Profile/>    
    // </UserContextProvider>

    <PostContextProvider>
      <Post/>
      <ShowPost/>
    </PostContextProvider>
  )
}

export default App
