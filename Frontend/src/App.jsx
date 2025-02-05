import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ToGet from './Components/ToGet'
import Create from './Components/Create'


function App() {


  return (
    <BrowserRouter>
    <>
    <Routes>

      <Route path='/' element={<ToGet/>} />
      <Route path='/create' element={<Create/>} />
      <Route path='/update' element={<h1>Update</h1>} />
      
    </Routes>

    </>
    </BrowserRouter>
  )
}

export default App
