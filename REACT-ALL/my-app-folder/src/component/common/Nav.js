import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';


export default function Nav() {
    return (
        <>
            <div>
            <nav className="navbar navbar-expand-md navbar-light bg-dark">
                <NavLink className="navbar-brand" to="#">Navbar</NavLink>
                <button className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/banner">Banner</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/main">Main</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/footer">Footer</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

            </div>
        </>
    )
}
