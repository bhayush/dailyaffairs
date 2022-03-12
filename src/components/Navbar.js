import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand mx-5" to="/"><b>Daily<i>Affairs</i></b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/business">Business</Link> 
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/entertainment">Entertainment</Link> 
        </li>  
        <li className="nav-item">
          <Link className="nav-link" to="/health">Health</Link> 
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/science">Science</Link> 
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sports">Sports</Link> 
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/technology">Technology</Link> 
        </li>
      </ul>
      
      <Link className="navbar-brand my-2 my-lg-0" to="/"><small className="text-muted">Ayush Bhardwaj
      </small></Link>
    </div>
  </div>
</nav>
</div>
  )
}
