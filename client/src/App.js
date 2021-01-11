import React,{ Component } from 'react';
import { Switch,Route} from 'react-router-dom';
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
       <Switch>
             <Route exact path="/" component={Home}/>
             <Route path="/about" component={About}/>
             <Route path="/work" component={Work}/> 
             <Route path="/contact" component={Contact}/>
             <Route path="/newpost" component={newPost}/>
             <Route path="/fullpost" component={FullPost}/>
             <Route path="/myposts" component={Myposts}/>
       </Switch>
    );
    
    const auth = (
      <Switch>
           <Route exact path="/" component={Login}/>
           <Route path="/signup" component={Signup}/>
      </Switch>
    )

    return(
        <div>
            { this.state.user ? App : auth }
        </div>
    );
  };
};

export default App;
