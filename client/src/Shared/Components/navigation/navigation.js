import React,{ useState } from 'react';
import fire from '../../../Authorization/auth';
import './navigation.css';
import {NavLink, withRouter} from 'react-router-dom';
import Backdrop from '../UIElements/backdrop';
import Switch from './../UIElements/switch';

const Nav = (props) => {

  const [show, setShow] = useState(false);

   const signoutHandler = () => {
     fire.auth().signOut();
     props.history.push('/');
   };

   const toggleHandler = () => {
     setShow(!show);
   };

    return(
        <div> 
             <Backdrop show={show} onClick={toggleHandler}/>
	               <input type="checkbox" checked={show} onChange={()=>setShow(show)} id="check"/>
	               <label htmlFor="check">
		                <i className="fa fa-bars" id="btn" onClick={toggleHandler}></i> 
	               </label>
             <div className="side" onClick={toggleHandler}>
		             <header>MY MENU</header>
	               <NavLink to="/about" exact><i className="fa fa-info-circle"></i> ABOUT</NavLink>
	               <NavLink to="/work"><i className="fa fa-wrench"></i> WORK WITH US</NavLink>
	               <NavLink to="/contact"><i className="fa fa-phone"></i> CONTACT</NavLink>
	               <NavLink to="/signout" onClick={signoutHandler}><i className="fa fa-arrow-right"></i> SIGNOUT</NavLink>
             </div>
              <div className="topnav">
                	<NavLink to="/" exact><i className="fa fa-home"></i> Home</NavLink>
                	<NavLink to="/myposts"> <i className="fas fa-audio-description"> </i> My Posts</NavLink>
                	<NavLink to="/newpost"> <i className="fa fa-plus-square"> </i> Add Post</NavLink>
                  <Switch/>
             	</div> 
        </div>
    );
};

export default withRouter(Nav);


