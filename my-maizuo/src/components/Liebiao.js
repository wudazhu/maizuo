import React,{Component} from 'react';
import '../style/public.css'
import '../style/shouye.css'
import '../style/liebiao.css'
import {BrowserRouter as Router, Link, NavLink, Route, Redirect, Prompt, Switch} from 'react-router-dom';

import axios from 'axios';
import Header from './Header'
import Liebiao1 from './Liebiao1'
import Liebiao2 from './Liebiao2'
import Xiangq from './Xiangq'

export default class Liebiao extends Component{
    constructor(){
        super();

        }

    render(){
    
        return(
         
            <div className="div">
               <Header></Header>
               <div className="section">
                 <div className="se3">
                 <Router>
                    <div>
                     <div className="shang">
                       <ul>
                           <li><NavLink activeClassName="active" to="/Liebiao/Liebiao1">正在热映</NavLink></li>
                           <li><NavLink activeClassName="active" to="/Liebiao/Liebiao2">即将热映</NavLink></li>
                       </ul>
                        </div>
                      <Switch>
                       <Route path="/Liebiao/Liebiao1" component={Liebiao1}/>
                       <Route path="/Liebiao/Liebiao2" component={Liebiao2}/>
                    
                      </Switch>
                    </div>
                 
                 </Router>
                 </div>
               </div>
            </div>
       
        )
    }
}









































