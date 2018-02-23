import React from "react"
import { Link } from "react-router-dom"
import './navbar.css'


const Navbar = () => (
    <nav className="navbar">
        <h1 className="navbar__logo">Post-It</h1>
        <Link className="navbar__logout" to="/login">
            <i class="fa fa-2x fa-sign-out"></i>
        </Link>
    </nav>
)

export default Navbar