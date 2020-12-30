import React,{ Component } from 'react';
import axios from 'axios';
import './posts.css';
import {withRouter} from 'react-router-dom';


class Posts extends Component{

    componentDidMount = () => {
        axios.get('http://localhost:8000/api/get/posts').then( res => {
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
                       <div className="posts-container d-md-flex" >
                            <div id={this.state.posts[posts].Id} className="carousel slide col-md-6" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                       <img className="d-block img-fluid" src={this.state.posts[posts].image1} alt="First Slide"/>
                                    </div> 
                                    <div className="carousel-item">
                                       <img className="d-block img-fluid" src={this.state.posts[posts].image2} alt="Second Slide"/>
                                    </div> 
                                    <div className="carousel-item">
                                       <img className="d-block img-fluid"src={this.state.posts[posts].image3} alt="Third Slide"/>
                                    </div> 
                                    <div className="carousel-item">
                                       <img className="d-block img-fluid"src={this.state.posts[posts].image4} alt="Four Slide"/>
                                    </div> 
                                </div>
                                <a href={"#"+this.state.posts[posts].Id} className="carousel-control-prev" data-slide="prev"><span className="carousel-control-prev-icon text-dark"></span></a>
                                <a href={"#"+this.state.posts[posts].Id} className="carousel-control-next" data-slide="next"><span className="carousel-control-next-icon"></span></a>
                            </div>
                            
                           <div className="col-md-6 px-5 pb-0 pt-5">
                             <span className="hostel-name">{this.state.posts[posts].name.toUpperCase()}</span>
                             <p className="room-details mt-3"><span className="text-dark">ROOM AVAILABLE:</span> {this.state.posts[posts].lookingfor.toUpperCase()}</p>
                             <p className="address" >{this.state.posts[posts].address.toUpperCase()}</p>
                             <br/>
                             <p className="area"><i className="fa fa-map-marker-alt"></i> {this.state.posts[posts].area.toUpperCase()},
                             {this.state.posts[posts].pincode}</p>
                             <p className="rent col-md-7">₹{this.state.posts[posts].rent}<span className="text-dark">/month</span></p>
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
