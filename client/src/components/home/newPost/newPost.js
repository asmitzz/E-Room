import React, {Component} from 'react';
import axios from 'axios';

class newPost extends Component{

    state = {
       name:"",
       rent:"",
       LookingFor:"",
       img:"",
       location:""
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

    fileHandler = (e) => {
        this.setState({img:e.target.value})
    }

    locationHandler = (e) => {
        this.setState({location:e.target.value})
    }

    submitHandler = () => {
        axios.post('http://localhost:8000/api/insert',this.state);
    }

    render(){
        return(
            <div>
                <h1 className="display-1 text-center">E-Room</h1>
                <form>
                    <div className="form-group">
                      <input type="text" onChange={this.nameHandler} className="form-control" placeholder="Enter your name"/>
                    </div>
                    <div className="form-group">
                      <input type="number" onChange={this.rentHandler} className="form-control" placeholder="Enter rent amount"/>
                    </div>
                    <div className="form-group">
                       <input type="text" onChange={this.lookingForHandler} className="form-control" placeholder="what are you looking for?"/>
                    </div>
                    <div className="form-group">
                      <input type="text" onChange={this.locationHandler} className="form-control" placeholder="enter area"/>
                    </div>
                    <div className="form-group">
                      <input type="file" onChange={this.fileHandler} className="form-control"/>
                    </div>
                    <div className="form-group text-center">
                       <input type="submit" onClick={this.submitHandler} value="submit"/>
                    </div>
                </form>

                    
            </div>
        );
    };
};

export default newPost;