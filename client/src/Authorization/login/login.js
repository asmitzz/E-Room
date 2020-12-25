import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import fire from '../auth';
import './login.css';

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
           <div className="main-container">
                   <div className="loginSection">
                        <h1 className="login-heading">LOGIN</h1>
                     <div className="formSection">
                        <div className="form-group">
                           <label>Email</label>
                           <input className="form-control" type="email" onChange={this.emailHandler} placeholder="Enter email address" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input className="form-control" type="password" onChange={this.passwordHandler} placeholder="Enter password" />
                        </div>
                        <button className="loginBtn mt-3 w-100" onClick={this.loginHandler}>LOGIN</button>
                     </div>
                        {/* <Link to="/signup">signup</Link> */}
                   </div>
           </div>
        );
    };
};

export default Login;