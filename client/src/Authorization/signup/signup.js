import React,{Component} from 'react';
import fire from '../auth';

class Signup extends Component{
    state = {
        email:"",
        password:""
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
         } );
         
     }
 
    render(){
        return(
           <div>
                <input type="email" onChange={this.emailHandler} placeholder="Enter email address" />
               <input type="password" onChange={this.passwordHandler} placeholder="Enter password" />
               <button onClick={this.signupHandler}>Register</button>
           </div>
        );
    };
};

export default Signup;