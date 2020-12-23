import React,{ Component } from 'react';
import '../../../navigation/navigation.css';
import './contact.css';
import Nav from '../../navigation';

class Contact extends Component{
  render(){
    return(
        <div> 
           <Nav type="Contact"/>
           <div className="contact">
           </div>
           <section className="main-section">
               <h2 className="contactUs">CONTACT US</h2>
               <i class="fas fa-phone-alt">&nbsp; 1-80-00330808</i>
               <i class="pl-5 fas fa-envelope">&nbsp;brandname@gmail.com</i>
               <hr/>
               <strong>Fancy working together or just say hi? Drop us a message below.</strong>
               <form className="mt-3">
                 <div>
                   <label>Your Name</label>
                   <input className="form-control" type="text" placeholder="Enter your name.."/>
                 </div>

                 <div>
                   <label>Your Email</label>
                   <input className="form-control" type="text" placeholder="Enter your email.."/>
                 </div>

                 <div>
                   <label>Subject</label>
                   <input className="form-control" type="text" placeholder="What would you like to talk us about?"/>
                 </div>

                 <div>
                   <label>Message</label>
                   <textarea className="form-control" type="text" placeholder="Type away :)"></textarea>
                 </div>

                 <input type="submit" className="send" value="SEND"/>
                 
               </form>
           </section>
               
      </div>

    );
  };
};

export default Contact;