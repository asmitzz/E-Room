import React,{ Component } from 'react';
import axios from 'axios';
import './posts.css';

class Posts extends Component{

    componentDidMount = () => {
        axios.get('http://localhost:8000/api/get').then( res => {
            this.setState({
                posts: res.data
            })
        });
    }

    state = {
        posts:{}
    }

    render(){
      
        return(
            <div>
               {
               Object.keys(this.state.posts).map( posts => {
                   return (
                   <div className="card my-5 mx-4" key={this.state.posts[posts].Id}>
                           <img className="card-img-top" src={this.state.posts[posts].img} alt="Card"/>
                           <div>
                               <h4 className="text-center">{this.state.posts[posts].name}</h4>
                               <p className="pl-3">Rent - {this.state.posts[posts].rent}<br/>
                                Looking For -  {this.state.posts[posts].LookingFor}<br/>
                                Location - {this.state.posts[posts].location}</p>
                               </div>
                               <h6 className="text-center bg-success p-2 mb-0"> Need room</h6>
                   </div>)
               })
               }

             
               
           </div>
        );
    };
};

export default Posts;