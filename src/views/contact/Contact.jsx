import React from 'react'
import Navbar from '../../components/navigation/Navbar';
import Footer from '../../components/footer/Footer';
import ContactForm from '../../components/ContactForm';

export default function Home () {

    return(
        <div>
            <Navbar/>
            <ContactForm/>
            <Footer/>
        </div>
    )
}