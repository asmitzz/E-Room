import React,{ Component } from 'react';
import { Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import About from './components/navigation/navigationItems/About/about';
import Work from './components/navigation/navigationItems/Work/work';
import Contact from './components/navigation/navigationItems/Contact/contact';

class App extends Component{
  render(){
    return(
        <div>
           <Switch>
             <Route exact path="/" component={Home}/>
             <Route path="/about" component={About}/>
             <Route path="/work" component={Work}/> 
             <Route path="/contact" component={Contact}/>
           </Switch>
        </div>
    );
  };
};

export default App;
