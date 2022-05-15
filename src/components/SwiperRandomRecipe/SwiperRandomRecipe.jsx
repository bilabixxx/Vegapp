import React from 'react'

import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import axios from 'axios';
import RecipCard from '../RecipCard/RecipCard';
import { useNavigate } from "react-router-dom";
import './SwiperRandomRecipe.css'


const SwiperRandomRecipe = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const APP_KEY = '24e8eefed1cf45608cf05cf96e958cb1';
    //const APP_KEY = '62c751ac972e43aab21ffddfba0e916b';
    let url = `https://api.spoonacular.com/recipes/random?apiKey=${APP_KEY}&number=10&tags=vegetarian`;

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setData(res.data.recipes);
            })
            .catch(() => {
                navigate("/*");
            })
    }, [])

    return (
        <>
            <h1 className='text-center mt-5'>Don't you feel like researching?</h1>
            <h2 className='text-center mb-5'>Choose from these random recipes</h2>
            <Swiper
                className='mb-3'
                modules={[Navigation, Autoplay]}
                spaceBetween={50}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 2500 }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                }}
            >
                {
                    data.map(recipe => {
                        return (
                            <SwiperSlide key={recipe.id}>
                                <RecipCard key={recipe.id} id={recipe.id} title={recipe.title} image={recipe.image} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    )

}

export default SwiperRandomRecipe