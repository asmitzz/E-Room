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
                               <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                  <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                  </ol>
                               <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block w-75" src={this.state.posts[url.get('post')].image1} alt="First slide"/>
                                    </div>
                                    <div className="carousel-item">
                                         <img className="d-block w-75" src={this.state.posts[url.get('post')].image2} alt="Second slide"/>
                                    </div>
                                    <div className="carousel-item">
                                          <img className="d-block w-75" src={this.state.posts[url.get('post')].image3} alt="Third slide"/>
                                    </div>
                                    <div className="carousel-item">
                                          <img className="d-block w-75" src={this.state.posts[url.get('post')].image4} alt="Third slide"/>
                                    </div>
                                    </div>
                                      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                      <span className="sr-only">Previous</span>
                                     </a>
                                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                      <span className="sr-only">Next</span>
                                    </a>
                                 </div>
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