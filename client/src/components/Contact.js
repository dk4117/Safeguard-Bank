import React from 'react';
import ImageSlider from './ImageSlider';


const Contact = ()=>{

    const slides =[
        {url:'C:\Users\Deepak kumar\Documents\GitHub\Safeguard-Bank\client\src\images\bike_banner.png', title:'bikeloan'},
        {url:'client\src\images\car_banner.png', title:'car loan'},
        {url:'client\src\images\homeloan_banner.png', title:'home lone'},
    ];
    
    return(


        <div> 
            <ImageSlider slides={slides}/>    </div>
        

    );

};

export default Contact;