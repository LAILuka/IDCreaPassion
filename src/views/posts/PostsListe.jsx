import React, {useEffect, useState} from "react";
import PostCard from "./PostCard";
import {Grid, Box} from '@mui/material';
import Skeleton from "@mui/material/Skeleton";
import { API_URL } from "../../config";
import Container from '@mui/material/Container';
import Navbar from "../../components/navigation/Navbar";

export default function PostsListe() {

    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState({});
    
    useEffect(() => {
        fetch(API_URL + '/api/posts?populate=%2A', 
        {
            method: "GET",
            headers:{
                'Accept': 'Application/json'
            }
        })
        .then(res => res.json())
        .then(response => {
            setTimeout(()=>{
                setPosts(response.data)
                setIsLoading(false)
            }, 1000)
           
        })
    },[])

    return(
        <div>
            <Navbar/>    
        <div className="posts">   
            <Container>
            <h1>Liste des articles</h1>
            <Grid container spacing={2}>
                {isLoading ? (
                        <Box>
                            <Skeleton variant="rounded" width={210} height={60}/>
                            <Skeleton width="60%" />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                        </Box>
                ) : posts.map(post => <PostCard post={post} key={post.id}/>)}   
            </Grid>
            </Container>
        </div>
        </div>  
    )
}