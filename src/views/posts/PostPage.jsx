import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import { API_URL } from '../../config';
import { Button, Container, Grid, Skeleton} from '@mui/material';
import Footer from "../../components/footer/Footer"
import Navbar from '../../components/navigation/Navbar';

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
                <div>
                    <Link to="/">
                        <Button variant="contained" color= "primary">
                          Retour
                        </Button>
                    </Link>
                </div>


            <Grid container spacing={2}>
                <Grid item sm={6}>
                    {isLoading ? <img src= {API_URL + postState?.data?.attributes?.image?.data[0]?.attributes?.formats?.small?.url} alt=""/> : <Skeleton variant="rect" width="100%" height={400} />}
               </Grid>
                <Grid item sm={5}>
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