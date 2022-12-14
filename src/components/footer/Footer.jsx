import React from "react";
import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { IconButton } from '@mui/material';
import { grey } from '@mui/material/colors';

export default function Footer() {

    return(
     <>
     
         <footer className="footer">
            <p className="copyright">© 2002 IDCréaPassion </p>
            <div className="social">
                <IconButton target="_blank" href="https://m.facebook.com/IDCrea.fr/"><FacebookIcon sx={{ color: grey[50] }}/></IconButton>
                <IconButton target="_blank" href=""><InstagramIcon sx={{ color: grey[50] }}/></IconButton>
                <IconButton target="_blank" href=""><PinterestIcon sx={{ color: grey[50] }}/></IconButton>
                <IconButton target="_blank" href=""><YouTubeIcon sx={{ color: grey[50] }}/></IconButton>   
            </div>          
         </footer>
     </>
    )
}