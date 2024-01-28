import React from 'react';
import '../../src/Style/services.css';
import {useHistory} from 'react-router-dom';


const Services = ()=>{
    
    const history = useHistory();

    const personalLoanStyle = {
        borderRadius:"10px",
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundImage: `url('./personal_loan.jpg')`
    };

    const bikeLoanStyle = {
        borderRadius:"10px",
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundImage: `url('./bike_loan.jpg')`
    };

    const carLoanStyle = {
        borderRadius:"10px",
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundImage: `url('./car_loan.jpg')`
    };

    const homeLoanStyle = {
        borderRadius:"10px",
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundImage: `url('./home_loan.png')`
    };

    return(


        <div>
            
            <div style={personalLoanStyle} onClick = {()=>history.push('/services/personalloan')} className="personal-loan">
                
            </div>
            <div style={bikeLoanStyle} onClick = {()=>history.push('/services/bikeloan')} className="bike-loan">
               
                
            </div>
            <div style={carLoanStyle} onClick = {()=>history.push('/services/carloan')} className="car-loan">
                
                
            </div>
            <div style={homeLoanStyle} onClick = {()=>history.push('/services/homeloan')} className="home-loan">
                
                
            </div>

        </div>
        

    );

};

export default Services;