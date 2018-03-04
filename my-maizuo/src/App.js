import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Link, NavLink, Route, Redirect, Prompt, Switch} from 'react-router-dom';
import './style/public.css'
import './style/icon/iconfont.css'
import Shouye from './components/Shouye'
import Xiangq from './components/Xiangq'
import Liebiao from './components/Liebiao'
import Login from './components/Login'
import Liebiao1 from './components/Liebiao1'
import Yuan from './components/Yuan'


class App extends Component {
  render() {
    return (
     <Router>
       
         
     <Switch>
     <Route exact path="/" component={Shouye}/>
     <Route  path="/Xiangq/:fid" component={Xiangq}/>   
     <Route  path="/Liebiao" component={Liebiao}/>  
     <Route  path="/Login" component={Login}/> 
     <Route  path="/Yuan" component={Yuan}/> 
     </Switch>
    
     </Router>
    );
  }
}

export default App;
