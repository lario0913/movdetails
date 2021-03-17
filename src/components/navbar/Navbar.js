import React from 'react'
import {RiMovieFill} from 'react-icons/ri'

import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbarTitle">
                <h1>MovDetails</h1>
            </div>
            <div className="navbarIcon">
                <RiMovieFill className='navbarIcon__movie' />
            </div>
        </div>
    )
}

export default Navbar
