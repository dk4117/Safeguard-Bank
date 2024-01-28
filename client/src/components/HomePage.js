import React from 'react';
import '../../src/Style/home.css'
import ImageSlider from './ImageSlider';

const HomePage = ()=>{
    const slides =[
        {url:'./credit_card.png', title:'credit card'},
        {url:'./bike_banner.png', title:'bikeloan'},
        {url:'./car_banner.png', title:'car loan'},
        {url:'./homeloan_banner.png', title:'home lone'}
        
    ];
    return(  
        <div>
            <div className="hero-banner">
                <ImageSlider slides={slides}/>     
            </div>
            <div className="my-offer">
                <h1>Offer for you!</h1>
                <p>Secure your future with PPF</p>
                <p>Invest in PPF for a secured future and tax saving under Section 80C</p>
            </div>

        </div>
    );

};

export default HomePage;