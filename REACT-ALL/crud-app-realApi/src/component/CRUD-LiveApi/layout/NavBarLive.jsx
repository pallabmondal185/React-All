import React from 'react'
import { Link } from 'react-router-dom'

const NavBarLive = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark bg-success">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                       
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/all">All Data</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Add">Add Data</Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBarLive;
