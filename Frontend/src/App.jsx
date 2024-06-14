import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import InsertData from './components/InsertData'
import Display from './components/Display'
import Update from './components/Update'
import Home from './components/Home'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
          <Route path="/insert" element={<InsertData />} />
          <Route path="/display" element={<Display />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
