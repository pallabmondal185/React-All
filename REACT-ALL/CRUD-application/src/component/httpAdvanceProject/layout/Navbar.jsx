import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/">Home</Link>
            <Link className="nav-item nav-link active" to="/alluser">All User</Link>
            <Link className="nav-item nav-link active" to="/adduser">Add User</Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
