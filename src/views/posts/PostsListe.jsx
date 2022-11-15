import React, {useEffect, useState} from "react";
import PostCard from "./PostCard";
import {Grid, Box} from '@mui/material';
import Skeleton from "@mui/material/Skeleton";
import { API_URL } from "../../config";
import Container from '@mui/material/Container';
import Navbar from "../../components/navigation/Navbar";
import "./PostsListe.css";


export default function PostsListe() {

    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState({});
    const boucle = 5;
    
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
            }, 500)
           
        })
    },[])

    function boucles() {
        const final = [];
        for (let i = 0; i < boucle; i++) {
            final.push(
                <Box className="post-card">
                <Skeleton variant="rounded" width={350} height={200}/>
                <Skeleton width="60%" />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton width="20%"/>
            </Box>
            );
        }

        return final;
    }

    return(
        <div>
            <Navbar/>    
        <div className="posts">   
            <Container>
            <h1>Liste des mes articles</h1>
            <Grid container spacing={2}>
                {isLoading ? 
                    <>
                    {boucles()}
                    </>
                    : posts.map(post => 
                    <div  className="post-card">
                     <PostCard post={post} key={post.id}/>
                    </div>
                )}   
            </Grid>
            </Container>
        </div>
        </div>  
    )
}