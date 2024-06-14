import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className='nav-main-div'>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark ">
    <div class="container">
      <a class="navbar-brand text-white" href="/">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-flex justify-content-end  " id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
      
            <Link to="/insert" class="nav-link active text-white"> Insert</Link>
          </li>
          <li class="nav-item">
          <Link to="/display" class="nav-link active text-white"> Display</Link>
          </li>
          <li class="nav-item">
            <Link to="/update" class="nav-link active text-white"> Update</Link>
          </li>
         
        </ul>
      </div>
    </div>
  </nav>
    
    </div>
   
    </>
  )
}

export default Navbar
