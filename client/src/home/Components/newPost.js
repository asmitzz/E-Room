import React, {Component} from 'react';
import axios from 'axios';
import './newPost.css';
import {withRouter} from 'react-router-dom';
import fire from '../../Authorization/auth';
import Backdrop from '../../Shared/Components/UIElements/backdrop';

let uploadBtnDisable = false;

class newPost extends Component{

    state = {
       name:"",
       rent:"",
       lookingfor:"For Boys",
       describe:"",
       address:"",
       area:"",
       pincode:"",
       phone:"",
       image1:"",
       image2:"",
       image3:"",
       image4:"",
       uid:"",
       error:"",
       isphonetrue:"",
       ispintrue:"",
       success:"",
       show:false
    };

    componentDidMount = () => {
        fire.auth().onAuthStateChanged( user => {
             this.setState({ uid: user.providerData[0].uid })
        } )
    }

    nameHandler = (e) => {
        this.setState({name:e.target.value})
    }

    rentHandler = (e) => {
        this.setState({rent:e.target.value})
    }

    lookingForHandler = (e) => {
        this.setState({lookingfor:e.target.value})
    }

    describeHandler = (e) => {
        this.setState({ describe: e.target.value })
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

    uploadHandler = () => {
        if( !this.state.image1 || !this.state.image2 || !this.state.image3 || !this.state.image4 || !this.state.name|| !this.state.rent || !this.state.describe || !this.state.pincode || !this.state.phone || !this.state.address || !this.state.area ){
            this.setState({ error:"" })
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
        this.setState({ error: "" });
        this.setState({success:"successfully uploaded click on submit to proceed"});

    }

    submitHandler = (event) => {
        event.preventDefault();
        if(!uploadBtnDisable){
            this.setState({ error:"please click upload button to upload all the fields correctly" })
            return;
        }
        else if( this.state.pincode.length !== 6 ){
            this.setState({ ispintrue:"please enter valid pincode" })
        }
        else if( this.state.phone.length === 10 ){
            axios.post('http://localhost:8000/api/insert/posts',this.state);
            
            this.setState({show:true});

            setTimeout(() => (
                this.setState({show:false})
            ),1000);

            setTimeout(() => (
                this.props.history.push('/')
            ),1100);

        }
        else{
            this.setState({ ispintrue:"" })
            this.setState({ isphonetrue:"please enter valid number" })
        }
            
    }

    render(){
        return(
            <div>
                <div className="newpost-container mt-3">
                <h1 className="display-1 contact-us">E-Room</h1>
                 <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                      <label className="newpost-label">Enter Hostel Name:</label>
                      <input type="text" minLength="3" maxLength="30" onChange={this.nameHandler} className="form-control" placeholder="Enter your hostel name.." required/>
                    </div>

                    <div className="form-group">
                      <label className="newpost-label">Enter Amount:</label>
                      <input type="number" onChange={this.rentHandler} className="form-control" placeholder="Enter rent amount.." required/>
                    </div>

                    <div className="form-group">
                       <label className="newpost-label">Choose a option:</label>
                       <select onChange={this.lookingForHandler} className="form-control" >
                           <option>For Boys</option>
                           <option>For Girls</option>
                           <option>Both</option>
                       </select>
                    </div>

                    <div className="form-group">
                      <label className="newpost-label">Description:</label>
                      <input type="text" minLength="10" maxLength="500" onChange={this.describeHandler} className="form-control" placeholder="describe your room.." required/>
                    </div>

                    <div className="form-group">
                      <label className="newpost-label">Enter Address:</label>
                      <input type="text" minLength="10" maxLength="100" onChange={this.addressHandler} className="form-control" placeholder="Enter address.." required/>
                    </div>

                    <div className="form-group">
                      <label className="newpost-label">Area:</label>
                      <input type="text" minLength="4" maxLength="20" onChange={this.areaHandler} className="form-control" placeholder="Enter area.." required/>
                    </div>

                    <div className="form-group">
                      <label className="newpost-label">Enter Pincode:</label>
                      <input type="number" onChange={this.pincodeHandler} className="form-control" placeholder="Enter pincode.." required/>
                      <span className="text-danger position-absolute"> { this.state.ispintrue }</span>
                    </div>
                    <div className="form-group">
                      <label className="newpost-label">Phone Number:</label>
                      <input type="number" onChange={this.phoneHandler} placeholder="Enter phone number.." className="form-control"/>
                      <span className="text-danger position-absolute">{this.state.isphonetrue}</span>
                    </div>
                    
                    <div className="form-group">
                      <label className="newpost-label">UPLOAD PHOTOS OF HOSTEL</label>
                      <input type="file" onChange={this.fileHandler1} className="form-control mb-1" required/>
                      <input type="file" onChange={this.fileHandler2} className="form-control mb-1" required/>
                      <input type="file" onChange={this.fileHandler3} className="form-control mb-1" required/>
                      <input type="file" onChange={this.fileHandler4} className="form-control mb-1" required/>
                    </div>
                   
                    <h6 className="position-absolute text-danger">{this.state.error}</h6>
                    <h6 className="position-absolute text-success">{this.state.success}</h6>
                    <button disabled={uploadBtnDisable} className="Btn mt-4" onClick={this.uploadHandler}>upload</button>
                       <input type="submit" className="submitBtn ml-5" value="submit"/>
                       </form>
                 </div>
                 <Backdrop show={this.state.show} />
               
              <div className={this.state.show ? "uploadPost text-success uploadOpen" : "uploadPost text-success uploadClosed" }>
                  <p><i className="fa fa-check-circle"></i> Successfully Uploaded</p>
               </div>
            </div>
        );
    };
};

export default withRouter(newPost);