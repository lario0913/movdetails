import React from 'react'
import {RiMovieFill} from 'react-icons/ri'
import {Link} from 'react-router-dom'

import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <Link className="navbarTitle" to="/">
                <h1>MovDetails</h1>
            </Link>
            <div className="navbarIcon">
                <RiMovieFill className='navbarIcon__movie' />
            </div>
        </div>
    )
}

export default Navbar
