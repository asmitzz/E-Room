import React,{ Component } from 'react';
import './filter.css';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
class Filter extends Component{

    state = {
       posts: "",
       location:"",
       locationSuggest:"",
       pincode:"",
       pincodeSuggest:""
    };

    componentDidMount = () => {
        axios.get('http://localhost:8000/api/get/posts').then( res => {
            this.setState({
                posts: res.data
            })
        });

        window.addEventListener('click',() => this.setState({locationSuggest:"",pincodeSuggest:""}));
    }

    areaSuggestHandler = (area) => {
        this.setState({ location:area });
        this.setState({locationSuggest:""});
    }

    pinSuggestHandler = (pin) => {
        this.setState({ pincode: pin });
        this.setState({ pincodeSuggest:""});
    }

    areaHandler = (e) => {
        this.setState({ location: e.target.value});

        const location =  Object.keys(this.state.posts).map((post)=>{
          return this.state.posts[post].area.toLowerCase();
        });

        const locationWithoutRepeat = new Set(location);
           
        const area = [...locationWithoutRepeat];

        const result = area.filter( area => area.includes(e.target.value.toLowerCase()));

        if( e.target.value ){
            this.setState({ locationSuggest:result.map((area) => {
                return <span className="highlight" onClick={() => this.areaSuggestHandler(area)} key={area}>{area.toUpperCase()}</span>
            } ) })
        }
        else{
            this.setState({ locationSuggest:"" })
        }
    }
    
    pincodeHandler = (e) => {
        this.setState({ pincode: e.target.value });
        const pincode =  Object.keys(this.state.posts).map((post)=>{
            return this.state.posts[post].pincode.toString();
        });
  
          const pincodeWithoutRepeat = new Set(pincode);
             
          const pincodes = [...pincodeWithoutRepeat];
  
          const result = pincodes.filter( pin => pin.includes(e.target.value));
  
          if( e.target.value ){
              this.setState({ pincodeSuggest : result.map((pin) => {
                  return <span className="highlight" onClick={() => this.pinSuggestHandler(pin)} key={pin} >{pin}</span>
              } ) })
          }
          else{
              this.setState({ pincodeSuggest:"" })
          }
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
                <span className="areaSuggestions">{this.state.locationSuggest}</span>
                <label className="mt-2 d-inline-block">Pincode: &nbsp;</label>
                <input type="number" className="form-control" onChange={this.pincodeHandler} value={this.state.pincode}/>
                <span className="pinSuggestions">{this.state.pincodeSuggest}</span>
                <button className="btn mt-3 w-50" onClick={this.ApplyBtnHandler}>Apply</button>
              </div>
          </div>
        );
    };
};


export default withRouter(Filter);