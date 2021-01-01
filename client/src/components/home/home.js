import React,{ Component } from 'react';
import Nav from '../navigation/navigation';
import Posts from './posts/posts';
import Filter from '../filter/filter';
import './home.css';
class Home extends Component{
  render(){
    return(
        <div> 
           <p className="FilterNotMatch">No Posts Found!!</p>
           <Filter/>
           <Nav active="home"/>
           <Posts/>
        </div>
    );
  };
};

export default Home;