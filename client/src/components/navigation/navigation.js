import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

class Nav extends Component{
  render(){
    return(
        <div> 
           <nav className="nav">
              <ul className="nav-bar">
                 <li className="nav-items">
                    <Link className="nav-link active" to='/'>Home</Link>
                 </li>
                 <li className="nav-items">
                    <Link className="nav-link" to='/about'>About</Link>
                 </li>
                 <li className="nav-items">
                    <Link className="nav-link" to='/work'>Work with us</Link>
                  </li>
                  <li className="nav-items">
                    <Link className="nav-link" to='/contact'>Contact</Link>
                  </li>
                  <li className="nav-items">
                    <button className="signoutBtn">Signout</button>
                  </li>
              </ul>
           </nav>
        </div>
    );
  };
};

export default Nav;