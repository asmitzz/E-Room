import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../navigation/navigation.css';
import './contact.css';



class Contact extends Component{
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
               <Link className="nav-link" to='/work'>Work With Us</Link>
           </li>
           <li className="nav-item">
              <Link className="nav-link" to='/contact'><h3>Contact</h3></Link>
           </li>
           <li className="nav-item">
              <button className="btn btn-color mt-1"><h5>Signout</h5></button>
           </li>
        </ul>
     </nav>
          <div className="text-white">

           <div className="section-3 p-2 text-center"> 
		         <h3><i className="fas fa-comments"></i></h3>
             <h5 className="pt-5 px-2 "> For Any Query Related To Our Website Contact Us Without Any Hesitation</h5>
             <h3 className="pt-3">Get in touch</h3>
             <h5 className="pt-4">Want to get in touch? We'd love to hear from you. Here's how you can reach us...</h5>
           </div>
           <div className="section-4 text-center p-2"> 
              <h2>Customer Support( 24x7 ) </h2>
              <h3><i className="fas fa-phone-alt"></i></h3>
             <ul className="list-group ">
                <li className="list-group-item">Phone : +91 6232965440</li>
                <li className="list-group-item">Phone : +91 7611135078</li>
                <li className="list-group-item">Email: harsh123@gmail.com</li>
                <li className="list-group-item">Email: akash123@gmail.com</li>
             </ul>
           </div>
           <div className="section-5 text-center p-2"> </div>
           </div>
    
      </div>

    );
  };
};

export default Contact;