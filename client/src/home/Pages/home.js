import React,{ Component } from 'react';
import Nav from '../../Shared/Components/navigation/navigation';
import Posts from '../Components/posts';
import Filter from '../Components/filter';
import './home.css';
class Home extends Component{
  render(){
    return(
        <div> 
           <p className="FilterNotMatch">No Posts Found!!</p>
           <Filter/>
           <Posts/>
        </div>
    );
  };
};

export default Home;