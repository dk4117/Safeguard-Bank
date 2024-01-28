import React from 'react';
import './App.css';
import LoginPage from './components/LoginPage.js';
import CustomerLogin from './components/CustomerLogin.js';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import EmployeeLogin from './components/EmployeeLogin';
import EmployeeControl from './components/EmployeeControl';
import PostEmployee from './components/AdminEmployee';
import PostCustomer from './components/AdminCustomer';
import CustomerControl from './components/CustomerControl';
import PostBranch from './components/AdminBranch';
import Transaction from './components/Transaction';
import Home from './components/HomePage.js';
import Services from './components/Services.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import PersoanlLoan from './components/PersonalLoan.js';
import BikeLoan from './components/BikeLoan.js';
import CarLoan from './components/CarLoan.js';
import HomeLoan from './components/HomeLoan.js';
import Emicalculator from './components/Emicalculator.js';
import Navbar from './components/Navbar.js';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/home' exact component={Home}/>
        <Route path='/login' exact component = {LoginPage} />
        <Route path='/customer/login' exact component = {CustomerLogin} />
        <Route path='/employee/login' exact component = {EmployeeLogin} />
        <Route path='/employee' exact component = {EmployeeControl} />
        <Route path='/admin/employee' exact component = {PostEmployee} />
        <Route path='/admin/customer' exact component = {PostCustomer} />
        <Route path='/admin/branch' exact component = {PostBranch} />
        <Route path='/customer' exact component= {CustomerControl}/>
        <Route path='/customer/transaction' exact component= {Transaction}/>
        <Route path='/services' exact component= {Services}/>
        <Route path='/about' exact component= {About}/>
        <Route path='/contact' exact component= {Contact}/>
        <Route path='/services/personalloan' exact component= {PersoanlLoan}/>
        <Route path='/services/bikeloan' exact component= {BikeLoan}/>
        <Route path='/services/carloan' exact component= {CarLoan}/>
        <Route path='/services/homeloan' exact component= {HomeLoan}/>
        <Route path='/services/personalloan/emicalculator' exact component= {Emicalculator}/>

        <Redirect to='/' /> 
        
      </Switch>
    </Router>
  );
}

export default App;
