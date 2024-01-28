import React from 'react';
import '../../src/Style/about.css';


const About = ()=>{
    
    const ImageStyles = {
        width:"100%",
        height:"380px",
        margin:"40px 0px",
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundImage: `url('./aboutus_promo3.jpg')`,
        color:"white",
        fontSize:"60px",
        paddingTop:"150px",
        borderRadius:"20px",
        
    };

    return(

        <div> 
            <div style={ImageStyles}>
                We're just the bank you need.
            </div>
            <div className='aboutusTitle'>
               <h1>About Us</h1> 
            </div>
            <div className='officeLocator'>
               <h2> Our Corporate Office. </h2> 
               <p> Safeguard Bank Limited, Corporate Office
                    Punchshil Business Park, Viman Nagar, 
                    Pune - 411001  
                </p>
                <h4>Tel: (+91)8553087666 </h4>
            </div>
        </div>
        
    );

};

export default About;