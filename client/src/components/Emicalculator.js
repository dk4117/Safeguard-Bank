import React, { useState } from 'react';
import '../../src/Style/emicalculator.css';


const Emicalculator = () => {
  const [principalAmount, setPrincipalAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [emiResult, setEmiResult] = useState(null);
  

  const calculateEMI = () => {
    const principal = parseFloat(principalAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const term = parseFloat(loanTerm);

    if (principal && rate && term) {
      const emi = (principal * rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
      setEmiResult(emi.toFixed(2));
    } else {
      setEmiResult(null);
    }
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    calculateEMI();
  };

  return (
    <div className="loginContainer" >      
      <h2 className='emiCalculatorTitle'>Loan EMI Calculator</h2>
      <h6>Plan your borrowings and repayments. Calculate your monthly outgo with our personal loan EMI calculator</h6>
      <form onSubmit={handleCalculate}>
        <div className="inputGroup">
          <label>Principal Amount (₹): &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
          <input
            type="number"
            value={principalAmount}
            onChange={(e) => setPrincipalAmount(e.target.value)}
            required
          />
        </div>
        <div className="inputGroup">
          <label>Interest Rate (per annum): &nbsp;&nbsp;&nbsp;</label>
          <input
            type="number"
            step="any" // Allow decimal inputs
            onChange={(e) => setInterestRate(e.target.value)}
            required
          />
        </div>
        <div className="inputGroup">
          <label>Loan Term (in months): &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            required
          />
        </div>
        <div className="calculateBtn">
          <button  type="submit">Calculate</button>
        </div>
      </form>
      {emiResult && (
        <div className="emiResult">
          
          <p> Your Monthly EMI will be  <b> ₹  {emiResult} </b> per month</p>
        </div>
      )}
       
    </div>
  );
};

export default Emicalculator;
