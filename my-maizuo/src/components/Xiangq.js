import React, {Component} from 'react';
import axios from 'axios';
import Header from './Header'
import '../style/public.css'
import '../style/xiangq.css'
import {Link} from 'react-router-dom';

export default class Xiangq extends Component{
    constructor(props){
        super(props);
        this.state={
            lists:[],
            lists2:[],
            films:[]
        }
    }
    componentDidMount(){
        var id =this.props.match.params.fid
        axios.get(`/v4/api/film/${id}?__t=1519720943210`)
        .then((res)=>{
            console.log(res);
            this.setState({
              lists:res.data.data.film,
              lists2:res.data.data.film.cover,
              films:res.data.data.film.actors
            })
        })
    }
      
    render(){
        return(
            <div className="div">
            <Header></Header>
            <div className="section"> 
                <div className="se2">
                   <p className="p1"><img src={this.state.lists2.origin}/></p>
                   <div class="ying">
                      <p className="p2"></p>
                      <h3>影片简介</h3>
                   </div>
                   <div className="jie">
                      <p><span>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span><span>{this.state.lists.director}</span></p>
                      <p className="fan"><span>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span>
                      <span>{
                          this.state.films.map(function(item, index){
                            return (
                                <span key={item.name}>
                                    <span>{item.name}|</span>
                                </span>
                            )
                        })
                      }</span>
                      </p>
                      <p><span>地区语言：</span><span>{this.state.lists.nation}({this.state.lists.language})</span></p>
                      <p><span>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：</span><span>{this.state.lists.category}</span></p>
                      <p><span>上映日期：</span><span>12月8日上映</span></p>
                      <p>{this.state.lists.synopsis}</p>
                   </div>

                   <div className="gou">立即购票</div>
               </div>
      
            </div>
            </div>
        )
    }
}