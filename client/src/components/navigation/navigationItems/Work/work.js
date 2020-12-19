import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../navigation/navigation.css';


class Work extends Component{
  render(){
    return(
        <div> 
             <nav className="navbar navbar-expand-md p-3">
<Link className="navbar-brand" to='/'>Home</Link>

<ul className="navbar-nav ml-auto">
   <li className="nav-item">
      <Link className="nav-link" to='/about'>About</Link>
   </li>
   <li className="nav-item">
      <Link className="nav-link" to='/work'><h3>Work With Us</h3></Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to='/contact'>Contact</Link>
    </li>
    <li className="nav-item">
      <button className="btn btn-color mt-1"><h5>Signout</h5></button>
    </li>
</ul>
</nav>

        </div>
    );
  };
};

export default Work;