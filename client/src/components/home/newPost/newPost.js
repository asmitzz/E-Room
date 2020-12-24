import React, {Component} from 'react';
import axios from 'axios';
import './newPost.css';
import {withRouter} from 'react-router-dom';
import Nav from '../../navigation/navigation';

class newPost extends Component{

    state = {
       rent:"",
       name:"",
       LookingFor:"",
       location:"",
       phone:"",
       img1:"",
       img2:"",
       img3:"",
       img4:"",
       pincode:""
    };

    nameHandler = (e) => {
        this.setState({name:e.target.value})
    }

    rentHandler = (e) => {
        this.setState({rent:e.target.value})
    }

    lookingForHandler = (e) => {
        this.setState({LookingFor:e.target.value})
    }

    fileHandler1 = (e) => {
        this.setState({img1:e.target.files[0]})
    }

    fileHandler2 = (e) => {
        this.setState({img2:e.target.files[0]})
    }

    fileHandler3 = (e) => {
        this.setState({img3:e.target.files[0]})
    }

    fileHandler4 = (e) => {
        this.setState({img4:e.target.files[0]})
    }

    locationHandler = (e) => {
        this.setState({location:e.target.value})
    }

    pincodeHandler = (e) => {
        this.setState({pincode:e.target.value})
    }

    phoneHandler = (e) => {
        this.setState({phone:e.target.value})
    }

    uploadHandler = () => {
        const img1 = new FileReader();
        img1.readAsDataURL(this.state.img1);
        img1.onloadend = () => {
        this.setState({ img:img1.result })
        }

        const img2 = new FileReader();
        img2.readAsDataURL(this.state.img2);
        img2.onloadend = () => {
        this.setState({ img:img2.result })
        }

        const img3 = new FileReader();
        img3.readAsDataURL(this.state.img3);
        img3.onloadend = () => {
        this.setState({ img:img3.result })
        }

        const img4 = new FileReader();
        img4.readAsDataURL(this.state.img4);
        img4.onloadend = () => {
        this.setState({ img:img4.result })
        }
    }

    submitHandler = () => {
        axios.post('http://localhost:8000/api/insert',this.state);
        this.props.history.push('/');
    }

    render(){
        return(
            <div>
                <Nav/>
                <div className="container">
                <h1 className="display-1 contact-us">E-Room</h1>
                
                    <div className="form-group">
                      <label>Enter Name:</label>
                      <input type="text" onChange={this.nameHandler} className="form-control" placeholder="Enter your name.."/>
                    </div>

                    <div className="form-group">
                      <label>Enter Amount</label>
                      <input type="number" onChange={this.rentHandler} className="form-control" placeholder="Enter rent amount.."/>
                    </div>

                    <div className="form-group">
                       <label>Choose a option:</label>
                       <select onChange={this.lookingForHandler} className="form-control" >
                           <option>For Boys</option>
                           <option>For Girls</option>
                           <option>Both</option>
                       </select>
                    </div>

                    <div className="form-group">
                      <label>Enter Address:</label>
                      <input type="text" onChange={this.locationHandler} className="form-control" placeholder="Enter address.."/>
                    </div>
                    <div className="form-group">
                      <label>Enter Pincode:</label>
                      <input type="text" onChange={this.pincodeHandler} className="form-control" placeholder="Enter pincode.."/>
                    </div>
                    <div className="form-group">
                      <label>Phone Number:</label>
                      <input type="text" onChange={this.phoneHandler} placeholder="Enter phone number.." className="form-control"/>
                    </div>
                    
                    <div className="form-group">
                      <label>UPLOAD PHOTOS OF HOSTEL</label>
                      <input type="file" onChange={this.fileHandler1} className="form-control"/>
                      <input type="file" onChange={this.fileHandler2} className="form-control"/>
                      <input type="file" onChange={this.fileHandler3} className="form-control"/>
                      <input type="file" onChange={this.fileHandler4} className="form-control"/>
                    </div>
                    
                    <button onClick={this.uploadHandler}>upload</button>
                    <div className="form-group text-center">
                       <input type="submit" onClick={this.submitHandler} value="submit"/>
                    </div>

                 </div>
            </div>
        );
    };
};

export default withRouter(newPost);