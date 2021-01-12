import React,{ Component } from 'react';
import fire from '../../Authorization/auth';
import './navigation.css';
import {NavLink, withRouter} from 'react-router-dom';
import Backdrop from '../backdrop/backdrop'; 

class Nav extends Component{

  state = {
    show: false
  };

   signoutHandler = () => {
     fire.auth().signOut();
     this.props.history.push('/');
   }

   toggleHandler = () => {
     this.setState({ show: !this.state.show })
   }

  render(){
    return(
        <div> 
             <Backdrop show={this.state.show} onClick={this.toggleHandler}/>
	               <input type="checkbox" checked={this.state.show} id="check"/>
	               <label htmlFor="check">
		                <i className="fa fa-bars" id="btn" onClick={this.toggleHandler}></i> 
	               </label>
             <div className="side" onClick={this.toggleHandler}>
		             <header>MY MENU</header>
	               <NavLink to="/about" exact><i className="fa fa-info-circle"></i> ABOUT</NavLink>
	               <NavLink to="/work"><i className="fa fa-wrench"></i> WORK WITH US</NavLink>
	               <NavLink to="/contact"><i className="fa fa-phone"></i> CONTACT</NavLink>
	               <NavLink to="/signout" onClick={this.signoutHandler}><i className="fa fa-arrow-right"></i> SIGNOUT</NavLink>
             </div>
              <div className="topnav">
                	<NavLink to="/" exact><i className="fa fa-home"></i> Home</NavLink>
                	<NavLink to="/myposts"> <i className="fas fa-audio-description"> </i> My Posts</NavLink>
                	<NavLink to="/newpost"> <i className="fa fa-plus-square"> </i> Add Post</NavLink>
             	</div> 
        </div>
    );
  };
};

export default withRouter(Nav);


