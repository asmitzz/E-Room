import React, {Component} from 'react';
import axios from 'axios';
import './newPost.css';
import {withRouter} from 'react-router-dom';
import Nav from '../../navigation/navigation';


let uploadBtnDisable = false;

class newPost extends Component{

    state = {
       name:"",
       rent:"",
       lookingfor:"For Boys",
       address:"",
       area:"",
       pincode:"",
       phone:"",
       image1:"",
       image2:"",
       image3:"",
       image4:"",
       error:"",
       isphonetrue:"",
       ispintrue:""
    };

    nameHandler = (e) => {
        this.setState({name:e.target.value})
    }

    rentHandler = (e) => {
        this.setState({rent:e.target.value})
    }

    lookingForHandler = (e) => {
        this.setState({lookingfor:e.target.value})
    }

    addressHandler = (e) => {
        this.setState({address:e.target.value})
    }

    areaHandler = (e) => {
        this.setState({area:e.target.value})
    }

    pincodeHandler = (e) => {
        this.setState({pincode:e.target.value})
    }

    phoneHandler = (e) => {
        this.setState({phone:e.target.value})
    }

    fileHandler1 = (e) => {
        this.setState({image1:e.target.files[0]})
    }

    fileHandler2 = (e) => {
        this.setState({image2:e.target.files[0]})
    }

    fileHandler3 = (e) => {
        this.setState({image3:e.target.files[0]})
    }

    fileHandler4 = (e) => {
        this.setState({image4:e.target.files[0]})
    }

    uploadHandler = (e) => {
        if( !this.state.image1 || !this.state.image2 || !this.state.image3 || !this.state.image4 ){
            this.setState({error:"please upload all the images correctly"});
            return;
        }
        const img1 = new FileReader();
        img1.readAsDataURL(this.state.image1);
        img1.onloadend = () => {
        this.setState({ image1:img1.result })
        }

        const img2 = new FileReader();
        img2.readAsDataURL(this.state.image2);
        img2.onloadend = () => {
        this.setState({ image2:img2.result })
        }

        const img3 = new FileReader();
        img3.readAsDataURL(this.state.image3);
        img3.onloadend = () => {
        this.setState({ image3:img3.result })
        }

        const img4 = new FileReader();
        img4.readAsDataURL(this.state.image4);
        img4.onloadend = () => {
        this.setState({ image4:img4.result })
        }

        uploadBtnDisable = true;
        this.setState({error:""})

    }

    submitHandler = (event) => {
        event.preventDefault();
        if(!uploadBtnDisable){
            return;
        }
        else if( this.state.pincode.length !== 6 ){
            this.setState({ ispintrue:"please enter valid pincode" })
        }
        else if( this.state.phone.length === 10 ){
            axios.post('http://localhost:8000/api/insert',this.state);
            this.props.history.push('/');
        }
        else{
            this.setState({ ispintrue:"" })
            this.setState({ isphonetrue:"please enter valid number" })
        }
            
    }


    render(){
        console.log(this.state.pincode.length)
        return(
            <div>
                <Nav/>
                <div className="container my-3">
                <h1 className="display-1 contact-us">E-Room</h1>
                 <form>
                    <div className="form-group">
                      <label>Enter Name:</label>
                      <input type="text" onChange={this.nameHandler} className="form-control" placeholder="Enter your name.." required/>
                    </div>

                    <div className="form-group">
                      <label>Enter Amount</label>
                      <input type="number" onChange={this.rentHandler} className="form-control" placeholder="Enter rent amount.." required/>
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
                      <input type="text" onChange={this.addressHandler} className="form-control" placeholder="Enter address.." required/>
                    </div>

                    <div className="form-group">
                      <label>Area:</label>
                      <input type="text" onChange={this.areaHandler} className="form-control" placeholder="Enter area.." required/>
                    </div>

                    <div className="form-group">
                      <label>Enter Pincode:</label>
                      <input type="number" onChange={this.pincodeHandler} className="form-control" placeholder="Enter pincode.." required/>
                      <span className="text-danger position-absolute"> { this.state.ispintrue }</span>
                    </div>
                    <div className="form-group">
                      <label>Phone Number:</label>
                      <input type="number" onChange={this.phoneHandler} placeholder="Enter phone number.." className="form-control"/>
                      <span className="text-danger position-absolute">{this.state.isphonetrue}</span>
                    </div>
                    
                    <div className="form-group">
                      <label>UPLOAD PHOTOS OF HOSTEL</label>
                      <input type="file" onChange={this.fileHandler1} className="form-control"/>
                      <input type="file" onChange={this.fileHandler2} className="form-control"/>
                      <input type="file" onChange={this.fileHandler3} className="form-control"/>
                      <input type="file" onChange={this.fileHandler4} className="form-control"/>
                    </div>
                   
                    <h6 className="position-absolute text-danger">{this.state.error}</h6>
                    <button disabled={uploadBtnDisable} className="Btn mt-4" onClick={this.uploadHandler}>upload</button>
                       <input type="submit" className="submitBtn ml-5" onClick={this.submitHandler} value="submit"/>
                       </form>
                 </div>
            </div>
        );
    };
};

export default withRouter(newPost);