import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import fire from '../../Authorization/auth';
import './navigation.css';
import {withRouter} from 'react-router-dom'

class Nav extends Component{

   signoutHandler = () => {
     fire.auth().signOut();
     this.props.history.push('/');
   }

  render(){
    return(
        <div> 
            <nav className="navbar navbar-expand-md p-3">

              <Link className="navbar-brand" to='/'>Home</Link>
    
              <ul className="navbar-nav ml-auto">
                 <li className="nav-item">
                    <Link className="nav-link" to='/about'>{this.props.type === 'About'? <h3>About</h3> : 'About' }</Link>
                 </li>
                 <li className="nav-item">
                    <Link className="nav-link" to='/work'>{this.props.type === 'Work'? <h3>Work With Us</h3> : 'Work with us' }</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/contact'>{this.props.type === 'Contact'? <h3>Contact</h3> : 'Contact' }</Link>
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-color mt-1" onClick={this.signoutHandler}><h5>Signout</h5></button>
                  </li>
              </ul>
           </nav>
           
        </div>
    );
  };
};

export default withRouter(Nav);