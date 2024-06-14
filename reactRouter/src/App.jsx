import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import './App.css'
import Layout from './components/Layout.jsx'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
