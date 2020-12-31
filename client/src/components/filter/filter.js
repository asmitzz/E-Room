import React,{ Component } from 'react';
import './filter.css';
import {withRouter} from 'react-router-dom';

class Filter extends Component{

    state = {
       location:"",
       pincode:""
    };

    inputHandler = (e) => {
        this.setState({ location: e.target.value})
    }
    pincodeHandler = (e) => {
        this.setState({ pincode: e.target.value })
    }

    ApplyBtnHandler = () => {
        this.props.history.push('?location='+this.state.location.toLowerCase()+'&&pincode='+this.state.pincode)
    }

    render(){
        return(
          <div className="filter-container">
              <div className="filterDiv">
                <h2 className="text-center"><i className="fa fa-filter"></i>Filter</h2>
                <p className="mt-5 d-inline-block">Location: &nbsp;</p>
                <input type="text" onChange={this.inputHandler}/>
                <p className="d-inline-block">Pincode: &nbsp;</p>
                <input type="number" onChange={this.pincodeHandler}/>
                <button className="btn w-50" onClick={this.ApplyBtnHandler}>Apply</button>
              </div>
          </div>
        );
    };
};


export default withRouter(Filter);