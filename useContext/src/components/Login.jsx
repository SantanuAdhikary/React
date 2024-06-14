import React from 'react'
import UserContext from '../context/Usercontext'
import { useState } from 'react'
import { useContext } from 'react'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

      const {setUser} = useContext(UserContext)

    let handleSubmit = (e)=>{
        e.preventDefault();
        setUser({username,password})
    }
  return (
    <div>
      <h2>Login</h2>
      <input 
      type="text" 
      value={username}
      placeholder='user name'
      onChange={(e)=>setUsername(e.target.value)}
      />
      <br />
      <input 
      type="text" 
      value={password}
      placeholder='password'
      onChange={(e)=>setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Login
