import React,{ Component } from 'react';
import fire from '../../Authorization/auth';
import './navigation.css';
import {Link, withRouter} from 'react-router-dom';
import Backdrop from '../backdrop/backdrop'; 

class Nav extends Component{

  state = {
    show: false
  }

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
             <Backdrop show={this.state.show}/>
	               <input type="checkbox" id="check"/>
	               <label htmlFor="check">
		                <i className="fa fa-bars" id="btn" onClick={this.toggleHandler}></i> 
		                <i className="fa fa-times" id="cancel" onClick={this.toggleHandler}></i>
	               </label>
             <div className="side">
		             <header>MY MENU</header>
	               <Link to="/" className= "mainnav"><i className="fa fa-home"></i> HOME</Link>
	               <Link to="/about"><i className="fa fa-info-circle"></i> ABOUT</Link>
	               <Link to="/work"><i className="fa fa-wrench"></i> WORK WITH US</Link>
	               <Link to="/contact"><i className="fa fa-phone"></i> CONTACT</Link>
	               <Link to="" onClick={this.signoutHandler}><i className="fa fa-arrow-right"></i> SIGNOUT</Link>
             </div>
              <div className="topnav">
                	<Link to="/"><i className="fa fa-home"></i></Link>
                	<Link to="/newpost"><i className="fa fa-plus-square"> POST</i></Link>
             	</div> 
        </div>
    );
  };
};

export default withRouter(Nav);


