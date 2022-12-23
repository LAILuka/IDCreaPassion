import React, {useState} from "react";
import "./Navbar.css";
import logo from '../../assets/img/Logo-3cm-72.png';
import { Link } from 'react-router-dom';

function Navbar() {
    const[showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }
    return (
        <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
            <div className="navbar_logo">
                <Link to='/'>
                    <img src={logo}></img>
                </Link>
            </div>
            <ul className="navbar_links">
                <li className="navbar_item">
                    <Link to='/'>
                    <a className="navbar_link">Accueil</a> 
                    </Link>
                </li>
                <li className="navbar_item">
                    <Link to='/contact'>
                        <a className="navbar_link">Contact</a> 
                    </Link>
                </li>
            </ul>
            <button className="navbar_burger" onClick={handleShowLinks}>
                <span className="burger-bar"></span>
            </button>
        </nav>
    )
}
export default Navbar