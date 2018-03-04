import React,{Component} from 'react';
import '../style/public.css'
import '../style/shouye.css'
import axios from 'axios';
import {BrowserRouter as Router, Link, NavLink, Route, Redirect, Prompt, Switch,withRouter} from 'react-router-dom';

import Header from './Header'

export default class Liebiao2 extends Component{
    constructor(){
        super();
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        axios.get("/v4/api/film/coming-soon?page=1&count=7")
		.then((res)=>{
			console.log(res);
			this.setState({
				list: res.data.data.films
			})
		})
    }

    render(){
        return(
            <div> 
           <ul className="u1">
               {
                this.state.list.map(function(item, index){
                    return (
                        <li key={item.id}>
                            <a href={"/Xiangq/" + item.id} className="a">
                            <div><img src={item.poster.origin} /></div>
                            <div className="d1">
                                <p className="p1" style={{fontSize:'16px'}}>
                                   <span>{item.name}</span>
                                   <span> <i class="icon iconfont icon-youjiantou1"></i></span>
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

