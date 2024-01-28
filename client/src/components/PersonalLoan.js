import React from 'react';
import '../../src/Style/personal_loan.css';
import PromoImage from "../images/personal_loan1.jpg";
import {useHistory} from 'react-router-dom';


const PersoanlLoan = () => {
    const history = useHistory();
    
    
    return(  
        <div>
            
            <div className='titleContainer'>
                <h1>Apply for Personal Loan in </h1>
                <h1>5 quick steps</h1>
                <div className='promoContainer'>
                    <img src={PromoImage} alt="employee not found"  className="personalLoanPromo1" />
                </div>
                <div className='textContainer'>
                    <div className='contentDetails'>
                        <ol>
                            <li>Select your loan amount and tenure</li>
                            <li>Provide your basic personal and work related information</li>
                            <li>Review your loan amount and tenure</li>
                            <li>Confirm your loan application</li>
                            <li>Get the loan disbursed</li>
                        </ol>

                        <button className='applyNowBtn'>Apply Now</button>
                        <button className='emiCalculator' onClick = {()=>history.push('/services/personalloan/emicalculator')}>EMI Calculator</button>

                    </div>
                </div>
                
                
                
            </div>
            <div className='benefitsAndFeatures'>
                <div className='benefitsAndFeatures-title'>
                    <h1>Benefits and Features of a Personal Loan</h1>
                </div>
                <div className='benefitsAndFeatures-content'>
                    <div className="solution-card__inner promo1">
                        <div className="solution-card__icon">
                            <picture>
                                <img src="" data-src="" alt="Instant approval" loading="lazy" width="40" height="35"/>
                            </picture>
                        </div>
                        <div className="solution-card__title">
                            <h3>No Foreclosure charges</h3>
                        </div>
                        <div className="solution-card__text">
		                <p>Zero Pre-closure charges, if 12 EMIs are Paid.</p>
	                    </div>
    
                    </div>

                    <div className="solution-card__inner">
                        <div className="solution-card__icon">
                            <picture>
                                <img src="" data-src="" alt="Instant approval" loading="lazy" width="40" height="35"/>
                            </picture>
                        </div>
                        <div className="solution-card__title">
                            <h3>Flexible tenure</h3>
                        </div>
                        <div className="solution-card__text">
                            <p>Enjoy the convenience of choosing a repayment tenure that suits your financial situation and goals.</p>
                        </div>
        
                    </div>

                    <div className="solution-card__inner">
                        <div className="solution-card__icon">
                            <picture>
                                <img src="" data-src="" alt="Instant approval" loading="lazy" width="40" height="35"/>
                            </picture>
                        </div>
                        <div className="solution-card__title">
                            <h3>Minimal Documentation</h3>
                        </div>
                        <div className="solution-card__text">
                            <p>Personal loans require minimal documentation, streamlining the application process and reducing paperwork.</p>
                        </div>

                    </div>
                    <div className="solution-card__inner">
                        <div className="solution-card__icon">
                            <picture>
                                <img src="" data-src="" alt="Instant approval" loading="lazy" width="40" height="35"/>
                            </picture>
                        </div>
                        <div className="solution-card__title">
                            <h3>Fixed Interest Rates</h3>
                        </div>
                        <div className="solution-card__text">
                            <p>Benefit from stable and predictable interest rates, ensuring consistency in your monthly payments.</p>
                        </div>
        
                    </div>
                </div>
            </div>
              

        </div>
    );

};

export default PersoanlLoan;