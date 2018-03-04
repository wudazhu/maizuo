import React,{Component} from 'react';
import '../style/liebiao1.css'
import axios from 'axios';
import Header from './Header'
import {BrowserRouter as Router, Link, NavLink, Route, Redirect, Prompt, Switch,withRouter} from 'react-router-dom';
import { PullToRefresh, ListView, Button } from 'antd-mobile';


  export default class Liebiao1 extends Component{
    constructor(){
        super();

        this.state={
            lists:[],
        }
    };
    componentDidMount(){
        axios.get("/v4/api/film/now-playing?page=1&count=7")
		.then((res)=>{
			console.log(res);
			this.setState({
				lists: res.data.data.films
			})
        })
    }
       


    render(){
        return(
            <div> 
           <ul className="u1">
               {
                this.state.lists.map(function(item, index){
                    return (
                        <li key={item.id}>
                            <a href={"/Xiangq/" + item.id} className="a">
                            <div><img src={item.poster.origin} /></div>
                            <div className="d1">
                                <p className="p1" style={{fontSize:'16px'}}>
                                   <span>{item.name}</span>
                                   <span><span style={{color:'orange'}}>{item.grade}</span> <i class="icon iconfont icon-youjiantou1"></i></span>
                                </p>
                                <p className="p2">{item.intro}</p>
                                <p className="p2" id="p2">
                                   <span>{item.cinemaCount}家电影院上映</span>
                                   <span>{item.watchCount}人购票</span>
                                </p>
                            </div>
                            </a>
                        </li>
                    )
                })
            }
           </ul>
            </div>
        )
    }
}
