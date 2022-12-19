import React, {useState} from "react";
import "./Navbar.css";
import {HiOutlineMenu} from 'react-icons/hi';
import {IoClose} from 'react-icons/io5';
import {Link} from 'react-router-dom';

/*
export default function Navbar() {
    
    const [toggleMenu, setToggleMenu] = useState(false);
    const [largeur, setLargeur] = useState (window.innerWidth)
    

    const toggleNavSmallScreen = () => {
        setToggleMenu(!toggleMenu);
    }
    const HamburgerIcon = <HiOutlineMenu className='btn' onClick={toggleNavSmallScreen}/>
    const CloseIcon = <IoClose className='btn' onClick={toggleNavSmallScreen}/>

    useEffect(() => {
        const changeWidth = () => {
            setLargeur(window.innerWidth); 
        
            if(window.innerWidth > 500){
            setToggleMenu(false);
            }
        }

        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth);
        }

    }, [])

    return(
        <nav>
            {(toggleMenu || largeur > 500) && (
                
                <ul className="liste">
                    <li className="items">
                        <Link to="/"> 
                            Accueil
                        </Link>
                    </li>
                    <li className="items">
                        <Link to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            )}
            {toggleMenu ? CloseIcon : HamburgerIcon}  
        </nav>
    )
}
*/

function Navbar() {
    const[showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }
    return (
        <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
            <div className="navbar_logo">Logo
                <img src=""></img>
            </div>
            <ul className="navbar_links">
                <li className="navbar_item">
                    <a href="/" className="navbar_link">Accueil</a> 
                </li>
                <li className="navbar_item">
                    <a href="/" className="navbar_link">Contact</a> 
                </li>
            </ul>
            <button className="navbar_burger" onClick={handleShowLinks}>
                <span className="burger-bar"></span>
            </button>
        </nav>
    )
}
export default Navbar