import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import { API_URL } from '../../config';
import { Container, Grid, Skeleton} from '@mui/material';
import Footer from "../../components/footer/Footer"
import Navbar from '../../components/navigation/Navbar';
import "./PostPage.css";
import Slider from "../../components/Slider";


export default function PostPage (){

    const {id} = useParams()
    let [postState, setPost] = useState({})
    let [isLoading, setIsLoading] = useState(false)

    useEffect( () => {
        fetch(API_URL + '/api/posts/' + id +"?populate=*")
            .then(res => res.json())
            .then(res => {
                setTimeout(() => {
                    setPost(res)
                    setIsLoading(true)
                }, 500)
            
            })
    }) 

    
    return(
        <div>
            <Navbar/>
            <Container>
            <Grid container spacing={2}>
                <Grid item sm={6}>
                    <div className="carousel">
                        <Slider/>
                    </div>
               </Grid>
                <Grid item sm={6}>
                    <h1>{isLoading ? postState.data.attributes.title : <Skeleton variant='text' width={300} height={80}/>}</h1>
                    <p>
                        {isLoading ? postState.data.attributes.content : (
                            <>
                            <Skeleton variant='text'/>
                            <Skeleton variant='text'/>
                            <Skeleton variant='text'/>
                            <Skeleton variant='text'/>
                            <Skeleton variant='text'/>
                            </>
                        )}
                    </p>
                </Grid>
            </Grid>
            </Container>
            <Footer/>
        </div>
    )
}