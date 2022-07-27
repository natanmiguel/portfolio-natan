import React from 'react';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import rufino from './rufino.jpg';
import superMario from './mario.jpg';
import ferlishek from './ferlishek.jpg';
import './carouselProject.css'

const CarouselProjects = () => (
    <Carousel
        plugins={[
            'infinite',
            'arrows',
            {
                resolve: slidesToShowPlugin,
                options: {
                    numberOfSlides: 2
                }
            },
        ]}
        breakpoints={{
            
            1100: {
                plugins: [
                    'infinite',
                    'arrows',
                    {
                        resolve: slidesToShowPlugin,
                        options: {
                        numberOfSlides: 1
                        }
                    },
                ]
            }
        }}
    >
        <img src={rufino} alt='siteRufino'/>
        <img src={superMario} alt='superMarioGame' />
        <img src={ferlishek} alt='siteFerlishek'/>
    </Carousel>
);

export default CarouselProjects;