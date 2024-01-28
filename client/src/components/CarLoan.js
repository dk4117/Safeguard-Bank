import React from 'react';
import Emicalculator from './Emicalculator';
import '../../src/Style/carloan.css'


const CarLoan = ()=>{
    
    return(  
        <div>
                       
                <div class="carLoanPromo">
                    <h1>Get pre approved Car loan!</h1>

                    <p>Safeguard Bank's online car loan EMI calculator makes it easy for you to figure out the monthly instalments on your loan. </p>

                    <p>When you take a loan, the equated monthly instalment is a key factor in deciding the loan amount and tenure.
                        The personal loan calculator helps you instantly calculate your pay-outs and, therefore, plan your loan and repayment better. </p>

                    <p> To calculate your EMI, just enter the loan amount, rate of interest (12%) and loan tenure in months, and your EMI is instantly displayed. If you wish to lower your EMI, you can do so by reducing the loan amount or the interest rate or by increasing the tenure. 
                        If you can afford higher monthly payments, you could consider increasing the loan amount or reducing your tenure.   </p>
                    
                </div>
                <div class="carLoanCalculate">
                    <Emicalculator />     
                </div>                
        

        </div>
    );

};

export default CarLoan;