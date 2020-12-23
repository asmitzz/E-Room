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
            <div>
               {
               Object.keys(this.state.posts).map( posts => {
                   return (
                         <div className="card my-5 mx-4" key={this.state.posts[posts].Id}>
                           <h6 className="text-center bg-success p-2 my-0 ">To-Let</h6>
                           <img className="card-img-top" src={this.state.posts[posts].img} alt="Card"/>
                           <div>
                               <h4 className="text-center">{this.state.posts[posts].name}</h4>
                               <p className="pl-3">Rent - {this.state.posts[posts].rent}<br/>
                                Looking For -  {this.state.posts[posts].LookingFor}<br/>
                                Location - {this.state.posts[posts].location}</p>
                               </div>
                               <button className="btn btn-primary w-100" onClick={() => this.btnHandler(posts)}>View post</button>
                           </div>
                   )
               })
               }
           </div>
        );
    };
};

export default withRouter(Posts);
