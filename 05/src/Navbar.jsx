import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

const Navbar = () => {
  return (
    <nav>
        <ul>
                <Link to={"/"}>Logo</Link>
            <li>
                <Link to={"/contact"}>Contact</Link>
            </li>
            <li>
                <Link to={"/about"}>About</Link>
            </li>
            <li>
                <Link to={"/login"}><button>Login</button></Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar