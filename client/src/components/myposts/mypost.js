import React, { useEffect,useState } from 'react';
import Nav from '../navigation/navigation';
import axios from 'axios';
import './mypost.css';
import { Link, withRouter } from 'react-router-dom';
import fire from '../../Authorization/auth';
import Backdrop from '../backdrop/backdrop';

const Mypost = (props) => {

    const [ posts, setPosts ] = useState("");
    const [ user, setUser ] = useState("");
    const [ show, setShow ] = useState(false);

    useEffect( () => {
       axios.get('http://localhost:8000/api/get/posts').then( res => (
            setPosts( res.data )
       ) );

       fire.auth().onAuthStateChanged( user => {
            if( user ){
                setUser(user.providerData[0].uid)
            }
       } )
    }, [] )

    const deleteHandler = (id) => {
        axios.post('http://localhost:8000/api/delete/post',{Id:id});
        setShow(true);
        setTimeout(() => (
            setShow(false),
            window.location.reload()
        ),1000)
    }

    const findpost = Object.keys(posts).find( post => (
        posts[post].uid === user
    ) ) 


    return (
        <div>
            <Nav/>
            <div className="mypost-container">
                     <h1 className="text-center text-secondary display-3">My Posts</h1>     
                    { posts && findpost ? (<div className="post">
                           <img alt="hostel" src={posts[findpost].image1}/>
                           <div className="post-body">
                              <h2 className="text-dark"><strong>{posts[findpost].name.toUpperCase()}</strong></h2>
                              <p>Room Available: <span className="text-secondary">{posts[findpost].lookingfor}</span></p>
                              <p>{posts[findpost].address}</p>
                              <h6><i className="fa fa-map-marker-alt"></i> {posts[findpost].area},{posts[findpost].pincode}</h6>
                              <p><strong className="text-danger">₹{posts[findpost].rent} </strong>/month</p>
                              <Link className="btn btn-outline-success mt-2 mr-2" to={"/fullpost?post=" + findpost}>
                                <i className="fa fa-eye"></i> View Details
                              </Link>
                              <button className="btn btn-outline-danger mt-2" onClick={() => deleteHandler(posts[findpost].Id)}>
                                 <i className="fa fa-trash"></i> Delete post
                              </button>
                           </div>
                      </div>) : (<p className="p-5 text-center text-danger">NO POSTS FOUND!!</p>)
                     } 
            </div>
            <Backdrop show={show} />
               
              <div className={show ? "deleteModal text-success modalOpen" : "deleteModal text-success modalClosed" }>
                  <p><i className="fa fa-check-circle"></i> Deleted</p>
               </div>
        </div>
    )
};

export default withRouter( Mypost );
