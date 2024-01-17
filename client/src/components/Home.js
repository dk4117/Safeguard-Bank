import React from 'react';
import '../../src/Style/home.css'
import car from '../images/car_banner.png';
import bike from '../images/bike_banner.png';
import homeloan from '../images/homeloan_banner.png';
import ImageSlider from './ImageSlider';

const Home = ()=>{
    const slides =[
        {url:'./bike_banner.png', title:'bikeloan'},
        {url:'./car_banner.png', title:'car loan'},
        {url:'./homeloan_banner.png', title:'home lone'},
    ];
    return(  
 
        <div class="hero-banner">
           <ImageSlider slides={slides}/>     
        </div>

        

    );

};

export default Home;