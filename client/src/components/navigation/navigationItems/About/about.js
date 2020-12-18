import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../navigation/navigation.css';

class About extends Component{
  render(){
    return(
        <div> 
            <nav className="navbar navbar-expand-md p-3">

           <Link className="navbar-brand" to='/'>Home</Link>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
             <Link className="nav-link" to='/about'><h3>About</h3></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/work'>Work With Us</Link>
          </li>
          <li className="nav-item">
           <Link className="nav-link" to='/contact'>Contact</Link>
          </li>
          <li className="nav-item">
           <button className="btn btn-purple mt-1"><h5 className="text-white">Signout</h5></button>
          </li>
</ul>
</nav>
       
        </div>
    );
  };
};

export default About;