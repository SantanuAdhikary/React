import React, { useState } from 'react'
import Navbar from './components/Navbar'
import NewsBoard from './components/NewsBoard'
import './App.css'
const App = () => {
  let [category,setCategory]= useState("general")
  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category}/>
    </div>
  )
}

export default App
