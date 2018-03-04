import React,{Component} from 'react';
import '../style/public.css'
import '../style/shouye.css'
import '../style/yuan.css'
import axios from 'axios';
import Header from './Header'
import {BrowserRouter as Router, Link, NavLink, Route, Redirect, Prompt, Switch} from 'react-router-dom';



export default class Yuan extends Component{
     constructor(){
         super();
         this.state={
            lists:[]
         }
     }
     componentDidMount(){
        axios.get("v4/api/cinema?__t=1519976782978")
        .then((res)=>{
            console.log(res);
                this.setState({
                    lists: res.data.data.cinemas
                })
        });
     }
    render(){
        return(
            <div className="div">
              <Header></Header>
              <div className="section">
                <div className="se5">

                    <div className="dian">
                    <div className="zhou">通州区</div>
                     <ul>
                     {
                         this.state.lists.map((item, index)=>{
                          return (
                            <li  key={item.id}>
                             <Link to={"/Xiang"}>
                                    <p className="p1"> 
                                        <span className="name">{item.name}</span>
                                        <span><i className="icon iconfont icon-youjiantou1"></i></span>
                                    </p>
                       
                                    <p className="p2">{item.address}</p>
                                    <p className="p2">距离位置</p>
                             </Link>
                             </li>
                            )
                         })
                        }
                         
                     </ul>
                    </div>













                </div>
              </div>

            </div>
        )
    }
}
























