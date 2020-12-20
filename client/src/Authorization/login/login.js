import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import fire from '../auth';

class Login extends Component{

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

    loginHandler = () => {
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password);
    }

    render(){
        return(
           <div>
               <input type="email" onChange={this.emailHandler} placeholder="Enter email address" />
               <input type="password" onChange={this.passwordHandler} placeholder="Enter password" />
               <button onClick={this.loginHandler}>login</button>
               <Link to="/signup">signup</Link>
           </div>
        );
    };
};

export default Login;