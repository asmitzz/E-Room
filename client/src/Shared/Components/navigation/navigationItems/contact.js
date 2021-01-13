import React,{ Component } from 'react';

import '../navigation.css';
import './contact.css';
import Nav from '../navigation';
import logo from '../../../../assets/Images/contact.svg';
import axios from 'axios';

class Contact extends Component{

  state = { 
    name:"",
    email:"",
    subject:"",
    message:""
  }

  nameHandler = (e) => {
      this.setState( {name:e.target.value} )
  };

  emailHandler = (e) => {
    this.setState( {email:e.target.value} )
  };

  subjectHandler = (e) => {
  this.setState( {subject:e.target.value} )
  };

  messageHandler = (e) => {
  this.setState( {message:e.target.value} )
  };

  submitHandler = () => {
    console.log(this.state);
    axios.post('http://localhost:8000/api/insert/feedbacks',this.state);
    alert("Thanks for your feedback we will contact you soon.. ");
  }

  render(){
    return(
        <div className="contact-container"> 
           <Nav/>
           <img src={logo} alt="contact" style={{width:'70%'}} className="d-block m-auto mt-5"/>
           <section className="main-section">
               <h2 className="contactUs">CONTACT US</h2>
               <i className="fas fa-phone-alt">&nbsp; 1-80-00330808</i>
               <i className="pl-5 fas fa-envelope">&nbsp;brandname@gmail.com</i>
               <hr/>
               <strong>Fancy working together or just say hi? Drop us a message below.</strong>
               <form className="mt-3">
                 <div>
                   <label className="contact-label">Your Name</label>
                   <input className="form-control" onChange={this.nameHandler} type="text" placeholder="Enter your name.." required/>
                 </div>

                 <div>
                   <label className="contact-label">Your Email</label>
                   <input className="form-control" onChange={this.emailHandler} type="text" placeholder="Enter your email.." required/>
                 </div>

                 <div>
                   <label className="contact-label">Subject</label>
                   <input className="form-control" onChange={this.subjectHandler} type="text" placeholder="What would you like to talk us about?" required/>
                 </div>

                 <div>
                   <label className="contact-label">Message</label>
                   <textarea className="form-control" onChange={this.messageHandler} type="text" placeholder="Type away :)" required></textarea>
                 </div>

                 <input type="submit" onClick={this.submitHandler} className="send" value="SEND"/>
               </form>
           </section>
               
      </div>

    );
  };
};

export default Contact;