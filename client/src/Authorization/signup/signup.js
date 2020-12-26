import React,{Component} from 'react';
import fire from '../auth';
import logo from '../../assets/logos/register.svg';
import {Link} from 'react-router-dom';

class Signup extends Component{
    state = {
        email:"",
        password:"",
        error:""
     };
 
     emailHandler = (event) => {
         this.setState({ email: event.target.value })
     };
 
     passwordHandler = (event) => {
         this.setState({ password: event.target.value })
     };

     signupHandler = () => {
         fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
         .then( () => {
            this.props.history.push('/');
         } ).catch( err => {
             this.setState({ error:err.message })
         } );
     }
     
    keyPressHandler = (e) => {
      this.setState({ error:"" })
      if( e.key === 'Enter' ){
          if( this.state.email === ""){
              this.setState({ error:"please enter email" })
          }
          else if( this.state.password === "" ){
              this.setState({ error:"please enter password" })
          }
          else{
            this.signupHandler();
          }
      }
  }
 
    render(){
        return(
               <div className="main-container">
                    <div className="loginSection">
                      <div className="text-center">
                        <img className="w-75" src={logo} alt="REGISTER"/>
                      </div>
                    <div className="formSection">
                      <div className="form-group">
                        <label className="login-label">Email</label>
                        <input className="form-control" onKeyPress={this.keyPressHandler}  type="email" onChange={this.emailHandler} placeholder="Enter email address" />
                      </div>
                     <div className="form-group">
                        <label className="login-label">Password</label>
                        <input className="form-control" onKeyPress={this.keyPressHandler}  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                          title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" type="password" onChange={this.passwordHandler} placeholder="Enter password" />
                     </div>
                      <button className="loginBtn mt-3" onClick={this.signupHandler}>REGISTER</button>
                      <br/>
                      <span className="text-danger">{this.state.error}</span>
                      <hr/>
                       <span style={{color:'white'}}>Already have an account? </span>  <Link className="link" to="/">LOGIN</Link>
                     </div>
                  </div>
             </div>
        );
    };
};

export default Signup;