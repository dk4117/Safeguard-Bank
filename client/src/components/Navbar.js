import { NavLink } from 'react-router-dom'
import '../../src/Style/navlink.css'
import logo from '../images/banklogo1.png';
//import { ReactComponent as Brand } from '../images/logo.png'



const Navbar = () => {

  if(sessionStorage.getItem("isLoggedIn") != null && sessionStorage.getItem("isLoggedIn") === "yes"){
      return (
        <nav className="navbar">
          <div className="container">
            <div className="logo">
            <img src={logo} alt="logo not found"  className="banklogo" />
            </div>
            <div className="nav-elements">
              <ul>
                <li>
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/services">Services</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                  <NavLink onClick = {()=> {sessionStorage.setItem("isLoggedIn","no"); window.location.reload();}} to="/">Log Out</NavLink>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
      )
    }else return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
        <img src={logo} alt="logo not found"  className="banklogo" />
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  )
    
}

export default Navbar