import React,{ Component } from 'react';
import { BrowserRouter as Router,Switch,Route, Redirect} from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import About from './components/navigation/navigationItems/About/about';
import Work from './components/navigation/navigationItems/Work/work';
import Contact from './components/navigation/navigationItems/Contact/contact';
import Login from './Authorization/login/login';
import Signup from './Authorization/signup/signup';
import fire from './Authorization/auth';
import newPost from './components/home/newPost/newPost';
import FullPost from './components/home/posts/fullpost/fullpost';
import Myposts from './components/myposts/mypost';


class App extends Component{

   state={
     user:""
   }

   componentDidMount = () => {
       fire.auth().onAuthStateChanged( user => {
           if(user){
             this.setState({user : user});
           }
           else{
             this.setState({ user : null })
           }
       })
   }

  render(){

    const App = (
      <Router>
         <Switch>
             <Route exact path="/" component={Home}/>
             <Route exact path="/about" component={About}/>
             <Route exact path="/work" component={Work}/> 
             <Route exact path="/contact" component={Contact}/>
             <Route exact path="/newpost" component={newPost}/>
             <Route exact path="/fullpost" component={FullPost}/>
             <Route exact path="/myposts" component={Myposts}/>
             <Redirect to="/"/>
         </Switch>
     </Router>
    );
    
    const auth = (
      <Router>
        <Switch>
           <Route exact path="/" component={Login}/>
           <Route exact path="/signup" component={Signup}/>
           <Redirect to="/"/>
        </Switch>
      </Router>
    )

    return(
        <div>
            { this.state.user ? App : auth }
        </div>
    );
  };
};

export default App;
