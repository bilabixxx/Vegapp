import React from 'react'

import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import RecipCard from '../RecipCard/RecipCard';
import { useAxios } from "use-axios-client";
import './SwiperRandomRecipe.scss'
import Loading from '../Loading/Loading';


const SwiperRandomRecipe = () => {
    let url = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_APP_KEY}&number=10&tags=vegetarian`;
    const { data, error, loading } = useAxios({ url });

    if (loading || !data) return <Loading />;
    if (error) return <p className='text-center'>Error + {error.status}</p>;

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
                    data.recipes.map((recipe, index) => {
                        return (
                            <SwiperSlide key={recipe.id}>
                                <RecipCard key={index} id={recipe.id} title={recipe.title} image={recipe.image} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    )

}

export default SwiperRandomRecipe