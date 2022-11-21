import React, {useState, useEffect} from "react";
import "./Navbar.css";
import {HiOutlineMenu} from 'react-icons/hi';
import {IoClose} from 'react-icons/io5';
import {Link} from 'react-router-dom';


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
