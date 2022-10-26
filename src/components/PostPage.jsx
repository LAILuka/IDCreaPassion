import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { API_URL } from '../config';
import Skeleton from "@mui/material/Skeleton";
import Grid from '@mui/material/Grid';



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
                }, 2000)
            
            })
    }) 

    
    return(
        <div>
            <Grid container spacing={2}>
                <Grid item sm={6}>
                    {/*isLoading ? `<img src="${ API_URL + postState.attributes.image.data[0].attributes.formats.small.url}"/>` : <Skeleton variant="rect" width="100%" height={400} />*/}
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
            
           
        </div>
    )
}