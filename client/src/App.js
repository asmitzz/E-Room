import React,{ Component } from 'react';
import { BrowserRouter as Router,Switch,Route, Redirect} from 'react-router-dom';
import './App.css';
import Home from './home/Pages/home';
import About from './Shared/Components/navigation/navigationItems/about';
import Work from './Shared/Components/navigation/navigationItems/work';
import Contact from './Shared/Components/navigation/navigationItems/contact';
import Login from './Authorization/login/login';
import Signup from './Authorization/signup/signup';
import fire from './Authorization/auth';
import newPost from './home/Components/newPost';
import FullPost from './home/Components/fullpost';
import Myposts from './home/Components/mypost';
import Nav from './Shared/Components/navigation/navigation';


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
         <Nav/>
         <main>
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
         </main>
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
