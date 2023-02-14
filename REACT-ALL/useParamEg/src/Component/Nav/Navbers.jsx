import React from 'react'
import { Link } from 'react-router-dom'
const Navbers = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-Linkght bg-Linkght">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <Link to={'/'} className="nav-item active">Home 
      </Link>
      <Link  to={'/about'}className="nav-item">
        <a className="nav-Linknk" href="#">About</a>
      </Link>
      
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Navbers
