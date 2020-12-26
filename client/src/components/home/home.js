import React,{ Component } from 'react';
import Nav from '../navigation/navigation';
import Posts from './posts/posts';
class Home extends Component{
  render(){
    return(
        <div> 
           <Nav/>
               {/* <div>
                    <Link to="/newpost" className="m-5 p-3 text-white border border-light rounded">
                    <img alt="plus" src="https://img.icons8.com/emoji/48/000000/plus-emoji.png" />
                    Add Post</Link>
               </div> */}
           <Posts/>
        </div>
    );
  };
};

export default Home;