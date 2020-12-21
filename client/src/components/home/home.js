import React,{ Component } from 'react';
import Nav from '../navigation/navigation';
import Posts from './posts/posts';
class Home extends Component{
  render(){
    return(
        <div> 
           <Nav/>
           <Posts />
        </div>
    );
  };
};

export default Home;