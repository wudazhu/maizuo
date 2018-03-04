import React,{Component} from 'react';
import '../style/public.css'
import '../style/login.css'
import Header from './Header'
import axios from 'axios'
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
import {Link} from 'react-router-dom';





export default class Login extends Component{
    constructor(props){
        super(props);

        this.state = {
          data:[]
          }
    }

 componentDidMount(){

}

    render(){
        return(
            <div className="div">
            <Header></Header>
            <div className="section">
               <div className="se4">

               <div className="yong">
                  <input type="text" placeholder="输入手机号/邮箱"/>
                  <div className="kuang"></div>
               </div>  

               <div className="yong">
                  <input type="text" placeholder="输入密码/验证码"/>
                  <div className="kuang"></div>
               </div> 
                 
               <div className="lu">
                  <p>登录</p>
               </div>
              
              
              
               </div>
            </div>
            </div>
        )
    }
}

































