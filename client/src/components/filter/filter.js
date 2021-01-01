import React,{ Component } from 'react';
import './filter.css';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
class Filter extends Component{

    state = {
       posts: "",
       location:"",
       pincode:"",
       area:""
    };

    componentDidMount = () => {
        axios.get('http://localhost:8000/api/get/posts').then( res => {
            this.setState({
                posts: res.data
            })
        });

        window.addEventListener('click',()=>this.setState({area:""}))
    }

    searchHandler = (area) => {
        this.setState({ location:area });
        this.setState({area:""})
    }

    areaHandler = (e) => {
        this.setState({ location: e.target.value});

        const location =  Object.keys(this.state.posts).map((post)=>{
          return this.state.posts[post].area
        });

        const locationWithoutRepeat = new Set(location);
           
        const area = [...locationWithoutRepeat]

        const result = area.filter( area => area.includes(e.target.value));

        if( e.target.value ){
            this.setState({ area:result.map((area) => {
                return <span className="highlight" onClick={()=>this.searchHandler(area)} key={area}>{area}</span>
            } ) })
        }
        else{
            this.setState({ area:"" })
        }
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
                <label className="mt-5 d-inline-block">Location: &nbsp;</label>
                <input type="text" className="form-control" onChange={this.areaHandler} value={this.state.location} />
                <span className="areaSuggestions">{this.state.area}</span>
                <label className="mt-2 d-inline-block">Pincode: &nbsp;</label>
                <input type="number" className="form-control" onChange={this.pincodeHandler}/>
                <button className="btn mt-3 w-50" onClick={this.ApplyBtnHandler}>Apply</button>
              </div>
          </div>
        );
    };
};


export default withRouter(Filter);