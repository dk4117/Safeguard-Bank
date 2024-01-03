import React from 'react';
import customer from '../images/customer.png';
import employee from '../images/employee.png';
import logo from '../images/logo.png';


import {useHistory} from 'react-router-dom';
const LoginPage = ()=>{
    const history = useHistory();

    return(

<div className="container p-5 mt-4"  style={{  justifyContent:'center', alignItems:'center', height: '100vh' ,textAlign : 'left', backgroundColor : '#edf2f4'}}>

<div className="logo"  style={{  justifyContent:'right', alignItems:'left'}}>
  <img src={logo} alt="logo not found" height="130px" width="350px" className="banklogo" style={{paddingBottom: "20px", marginTop:"0px"}} />
  <h1 style={{textAlign : "right", float: "inline-end", marginTop:"40px"}}>  Welcome to Safeguard Bank</h1>
</div>




<table className="table">
  <tbody>
    <tr>
      <td>
        <div className="card text-black bg-white mt-3 shadow-lg p-3 mb-5 bg-white rounded">
  <div className="">
    <h3 className="float-left">Customer</h3>
    <button className="btn btn-outline-success float-right" height="100px" onClick = {()=>history.push('/customer/login')}>Login</button>
    </div>
  <div className="card-body pd-5">
    <img src={customer} alt="customer not found" height="300px" className="rounded mx-auto d-block mt-4" />
  </div>
</div>
</td>
<td>
        <div className="card text-black bg-white mt-3 shadow-lg p-3 mb-5 bg-white rounded">
  <div className="">
    <h3 className="float-left">Employee</h3>
    <button className="btn btn-outline-success float-right" height="100px" onClick = {()=>history.push('/employee/login')}>Login</button>
    </div>
  <div className="card-body pd-5">
    <img src={employee} alt="employee not found" height="300px" className="rounded mx-auto d-block mt-4" />
  </div>
</div>
</td>

    </tr>

  </tbody>
</table>
</div>
    );
};

export default LoginPage;