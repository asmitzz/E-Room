import React,{ Component } from 'react';
import './filter.css';
import axios from 'axios';

class Filter extends Component{

    componentDidMount = () => {
        axios.get('http://localhost:8000/api/get/posts').then( res => {
            this.setState({
                posts: res.data
            })
        });
    }

    state = {
       posts: ""
    };

    render(){
        return(
          <div className="filter-container">
             <h4><i className="fa fa-filter"></i>Filter</h4>
          </div>
        );
    };
};


export default Filter;