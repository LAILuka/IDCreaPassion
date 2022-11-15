import React from "react";
import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';


export default function Footer() {

    return(
     <>
     
         <footer>
         <Link href="https://mui.com/material-ui/react-link/">Link</Link>
            <p>© 2022 IDCréaPassion
          
                    <FacebookIcon/>
            </p>
         </footer>
     </>
    )
}