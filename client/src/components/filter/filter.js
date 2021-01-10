import React, { Component } from "react";
import "./filter.css";
import { withRouter } from "react-router-dom";
import axios from "axios";
class Filter extends Component {
  state = {
    posts: "",
    location:"",
    pincode:""
  };

  componentDidMount = () => {
    axios.get("http://localhost:8000/api/get/posts").then((res) => {
      this.setState({
        posts: res.data,
      });
    });
  };

  areaHandler = (e) => {
    this.setState({ location: e.target.value });
  };

  pincodeHandler = (e) => {
    this.setState({ pincode: e.target.value });
  };

  ApplyBtnHandler = (e) => {
    e.preventDefault();
    this.props.history.push("?location=" +this.state.location.toLowerCase() +"&&pincode=" +this.state.pincode);
  };

  render() {
    const fetchLocations = Object.keys(this.state.posts).map((post) => this.state.posts[post].area );
    const fetchPincodes = Object.keys(this.state.posts).map((post) => this.state.posts[post].pincode );
    const locations = new Set(fetchLocations);
    const pincodes = new Set(fetchPincodes);

    return (
      <div className="filter-container">
        <div className="filterDiv">
          <h2 className="text-center">
            <i className="fa fa-filter"></i>Filter
          </h2>
        <form onSubmit={this.ApplyBtnHandler}>

          <label className="mt-5 d-inline-block">Location: &nbsp;</label>
          <input
            type="text"
            list="location"
            className="form-control"
            onChange={this.areaHandler}
            />
          <datalist id="location">
            {[...locations].map((loc) => {
              return (
                <option key={loc}>{loc.toUpperCase()}</option>
                );
              })}
          </datalist>
          <label className="mt-2 d-inline-block">Pincode: &nbsp;</label>
          <input
            type="text"
            list="pincodes"
            className="form-control"
            onChange={this.pincodeHandler}
            />
          <datalist id="pincodes">
            {[...pincodes].map((pin) => {
              return <option key={pin}>{pin}</option>;
            })}
          </datalist>
          <button className="btn mt-3 w-50">Apply</button>
      </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Filter);
