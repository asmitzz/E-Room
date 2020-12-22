import React,{ Component } from 'react';
import '../../../navigation/navigation.css';
import './contact.css';
import Nav from '../../navigation';

class Contact extends Component{
  render(){
    return(
        <div> 
           <Nav type="Contact"/>

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