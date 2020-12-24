import React,{ Component } from 'react';
import axios from 'axios';
import './fullpost.css';
import Nav from '../../../navigation/navigation';

class FullPost extends Component{

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

    
    render(){
        const url = new URLSearchParams(window.location.search);
        return(

            <div>
                <Nav/>
               {
                 Object.keys(this.state.posts).map( posts => {
                     
                    if(posts === url.get('post')){
                       return (
                            <div key={this.state.posts[url.get('post')].Id}>
                               <div className="mainDiv" >
                                  <img className="fullimg" alt="" src={this.state.posts[url.get('post')].image1}/>
                               </div>
                               <div className="details text-secondary">
                                     <h3>Details</h3>
                                     <p className="a">Name: <span>{this.state.posts[url.get('post')].name}</span> </p>
                                     <p className="b">Rent: <span>{this.state.posts[url.get('post')].rent}</span></p>
                                     <p className="c">location: <span>{this.state.posts[url.get('post')].area}</span></p>
                                     <p className="d">Looking-For: <span>{this.state.posts[url.get('post')].lookingfor}</span></p>
                               </div>
                            </div>
                       ); 
                     }
                     else{
                         return "";
                     }
                 })
               }
            </div>
        )
    }
}
export default FullPost;