import React,{ Component } from 'react';
import Nav from '../navigation/navigation';
import Posts from './posts/posts';
import Filter from '../filter/filter';
class Home extends Component{
  render(){
    return(
        <div> 
           <Nav active="home"/>
           <Posts/>
           <Filter/>
        </div>
    );
  };
};

export default Home;