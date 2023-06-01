import React from 'react'
import '../Styles/navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='nav-wrapper'>
            <nav>
                <div class="logo">
                    <h2>Bakery Landing</h2>
                </div>
                <ul class="nav-links" id="navLinks">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="#">Menu</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <div class="hamburger" onclick="toggleMenu()">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </nav>
        </div>

    )
}

export default Navbar