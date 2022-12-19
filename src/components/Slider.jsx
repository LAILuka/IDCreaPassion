import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import "./Slider.css";
import { API_URL } from '../config';
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

function Slider() {
    
    const {id} = useParams()
    let [postState, setPost] = useState({})


    useEffect( () => {
        fetch(API_URL + '/api/posts/' + id +"?populate=*")
            .then(res => res.json())
            .then(res => {
                setPost(res)
            })
    }) 
   
    const datas = [
        {
            id:1,
            image: API_URL + postState?.data?.attributes?.image?.data[0]?.attributes?.formats?.small?.url,
        },
        {
            id:2,
            image: API_URL + postState?.data?.attributes?.image?.data[1]?.attributes?.formats?.small?.url,
        },
        {
            id:3,
            image: API_URL + postState?.data?.attributes?.image?.data[2]?.attributes?.formats?.small?.url,
        },
        {
            id:4,
            image: API_URL + postState?.data?.attributes?.image?.data[3]?.attributes?.formats?.small?.url,
        }
    ]
    
    return <Carousel autoPlay interval={6000} infiniteLoop>
        {datas.map(slide => (
            <div key={slide.id}>
                <img src={slide.image} alt=""/>
            </div>
        ))}
    </Carousel>
}

export default Slider