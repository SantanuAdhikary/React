import { useCallback, useEffect, useState } from 'react'

import './App.css'

import { useRef } from 'react'

function App() {
  const [password, setPassword] = useState("hello")
  const [length,setLength] = useState(8)
  const [char,setChar] = useState(false)
  const [number,setNumber] = useState(false)
  let passwordref = useRef("")

  const copyData=()=>{
    passwordref.current.focus()
    passwordref.current.select()
    window.navigator.clipboard.writeText(password)
   }

  // const submit=useCallback(()=>{},[])
  let generatePassword = useCallback(()=>{

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "0123456789"
    if (char) str += "!@#$%^&*-_+"

    for(let i=1;i<=length;i++)
      {
        let index = Math.floor(Math.random()*str.length + 1)
        pass += str.charAt(index)
      }
     
     
      setPassword(pass)

  },[length,char,number])

  useEffect(()=>{
    generatePassword()
  },[length,char,number,generatePassword])

  return (
    <>
     
      <div className="container">
        <h1>Password Generator</h1>
        <div className="input-box">
          <input 
          type="text" 
          name="pwd"
          value={password}
          ref={passwordref}
          />
          <button onClick={copyData}>copy</button>
        </div>
        <div className="options">
          <input 
          type="range" 
          min={6}
          max={25}
          value={length}
          onChange={(e)=>setLength(e.target.value)} />
          {length}
          
          <input 
          type="checkbox" 
           id="char"
           onChange={()=>{
            setChar((pre)=>!pre)
           }}
           />
           <label htmlFor="char">Character</label>
          
          <input 
          type="checkbox" 
           id="number" 
           onChange={()=>{
            setNumber((pre)=>!pre)
           }}
           />
           <label htmlFor="number">Number</label>
        </div>
      </div>
      
    </>
  )
}

export default App



