import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import fire from '../auth';
import './login.css';
import logo from '../../assets/logos/login.svg';


class Login extends Component{

    state = {
       email:"",
       password:"",
       error:""
    };

    emailHandler = (event) => {
        this.setState({ email: event.target.value });
    };

    passwordHandler = (event) => {
        this.setState({ password: event.target.value });
    };


    loginHandler = () => {
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).catch(err=>{
            this.setState({ error:err.message });
        });
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
              this.loginHandler();
            }
        }
    }


    render(){
        return(
           <div className="login-container">
                   <div className="loginSection">  
                        <div className="text-center">
                          <img className="w-50" src={logo} alt="LOGIN"/>
                        </div>
                     <div className="formSection">
                        <div className="form-group">
                           <label className="login-label">Email</label>
                           <input className="form-control" type="email" onKeyPress={this.keyPressHandler} onChange={this.emailHandler} placeholder="Email Address" />
                        </div>
                        <div className="form-group">
                            <label className="login-label">Password</label>
                            <input className="form-control" onKeyPress={this.keyPressHandler} type="password" onChange={this.passwordHandler} placeholder="Password" />
                        </div>
                        <button className="loginBtn mt-3" onClick={this.loginHandler}>LOGIN</button>
                        <br/>
                        <span className="text-danger">{this.state.error}</span>
                        <hr/>
                       <span style={{color:'white'}}>Don't have an account? </span>  <Link className="link" to="/signup">REGISTER</Link>
                     </div>
                   </div>
           </div>
        );
    };
};

export default Login;