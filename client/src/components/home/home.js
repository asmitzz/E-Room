import React,{ Component } from 'react';
import Nav from '../navigation/navigation';
import Posts from './posts/posts';
import { Link } from 'react-router-dom';
class Home extends Component{
  render(){
    return(
        <div> 
           <Nav/>
               <div>
                    <Link to="/newpost" className="mx-4 p-3 border border-primary rounded bg-dark">
                    <img alt="plus" src="https://img.icons8.com/emoji/48/000000/plus-emoji.png" />
                    Add new Post</Link>
               </div>
           <Posts/>
        </div>
    );
  };
};

export default Home;