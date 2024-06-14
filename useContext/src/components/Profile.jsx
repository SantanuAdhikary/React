import React from 'react'
import UserContext from '../context/Usercontext'
import { useContext } from 'react'

const Profile = () => {

     const {user} = useContext(UserContext)

     if(!user) return <div>Please Login</div>
 
     return (
    <div>
       <div>welcome - {user.username}</div>
    </div>
  )
}

export default Profile
