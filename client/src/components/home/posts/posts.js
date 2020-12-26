import React,{ Component } from 'react';
import axios from 'axios';
import './posts.css';
import {withRouter} from 'react-router-dom';

class Posts extends Component{

    componentDidMount = () => {
        axios.get('http://localhost:8000/api/get').then( res => {
            this.setState({
                posts: res.data
            })
        });
    }

    state = {
        posts:{},
    }

    btnHandler = (post) =>{
       this.props.history.push('/fullpost?post='+post)
    }
           

    render(){
        return(
            <div className="main-posts">
               {
               Object.keys(this.state.posts).map( posts => {
                   return (
                    <div key={this.state.posts[posts].Id}>
                       <div className="posts-container d-flex" >
                           <div className="posts col-6">
                             <img src={this.state.posts[posts].image1} alt="room"/>
                           </div>
                           <div className="col-6 px-5 pb-0 pt-5">
                             <span className="hostel-name">{this.state.posts[posts].name.toUpperCase()}</span>
                             <p className="room-details mt-3">ROOM AVAILABLE: {this.state.posts[posts].lookingfor.toUpperCase()}</p>
                             <p className="address" >{this.state.posts[posts].address.toUpperCase()}</p>
                             <br/>
                             <p className=".area">{this.state.posts[posts].area.toUpperCase()},
                             {this.state.posts[posts].pincode}</p>
                             <p className="rent col-7">₹{this.state.posts[posts].rent}<span className="text-dark">/month</span></p>
                             <button className="viewBtn mb-2" onClick={() => this.btnHandler(posts)}>View Details</button>
                          </div>  
                       </div>
                       <hr className="separate"/>
                   </div>
                   )
               })
               }
           </div>
        );
    };
};

export default withRouter(Posts);
