import React, { useState, useRef, useEffect } from 'react';
import employee from '../images/employee.png';
import {useHistory} from 'react-router-dom';
import { environmentConfig } from '../environment.config';
const EmployeeLogin = ()=>{
  
 
  const errRef = useRef();
  const history = useHistory();
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
/*
  useEffect(() => {
   userRef.current.focus();
  },[]) */

  useEffect(() => {
    setErrMsg('');
  },[user,pwd])  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user,pwd); 
    const userName = user;
    const password = pwd;
    try {
      const query = await fetch(`${environmentConfig.apiEndPoint}/employee/${userName}`); 
      const data = await query.json();

      if(data.username === userName)
      {
        if(data.user_password === password){
          console.log("login successfull");
          history.push("/employee");
        }else {
          setErrMsg('incorrect password');
      }
      }
     
  }catch(e){
    setErrMsg('user does not exit');
    } 
    
  }
  
    return (
<div>
    <br></br>
<h1 className="mt-5 mb-5" style={{textAlign : "center"}}>Employee Login</h1>
<div className="border container p-0 shadow-lg p-3 mb-5 bg-white rounded "  style={{display: 'flex',  justifyContent:'center'}}>
    <img src={employee} alt="customer missing" className="rounded mx-auto d-block ml-10 mr-10 flex-left p-5" height="400px"></img>
    
    <form className='container flex-right p-5 ' onSubmit={handleSubmit} style={{alignSelf : "right"}} method='get' >

    <div className="form-group">
      <label className="mt-4">Username</label>
      <input 
        type="text" 
        className="form-control mb-3" 
        aria-describedby="emailHelp" 
        onChange = {(e) => setUser(e.target.value)} 
        value={user}
        required
      
      />
      <label >Password</label>
      <input type="password" 
        className="form-control" 
        onChange = {(e) => setPwd(e.target.value)} 
        required
      
      />
    </div>
    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live='assertive'>{errMsg}</p>
    <button type="submit" class="btn btn-primary btn-lg mt-3" >Login</button>
</form>
</div>
</div>
    );
};

export default EmployeeLogin;