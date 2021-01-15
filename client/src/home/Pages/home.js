import React,{ Component } from 'react';
import Posts from '../Components/posts';
import Filter from '../Components/filter';
import './home.css';
class Home extends Component{
  render(){
    return(
        <div> 
           <p className="FilterNotMatch"><strong>No Posts Found!!</strong></p>
           <Filter/>
           <Posts/>
        </div>
    );
  };
};

export default Home;