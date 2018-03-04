import React,{Component} from 'react';
import '../style/public.css'
import '../style/shouye.css'
import {BrowserRouter as Router, Link, NavLink, Route, Redirect, Prompt, Switch} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Header extends Component{
    constructor(props){
        super(props);

        this.state = {
            showFlag : false,
          }

          this.changeFlag = this.changeFlag.bind(this);
    }

    changeFlag(){
        this.setState({
            showFlag:!this.state.showFlag
        })
    }
    render(){
        var pComp= <div className="caidan">
        <div className="cai">
        <ul>
            <li>
                <Link to={"/"}>
                <span>首页</span>
                <span><i class="icon iconfont icon-youjiantou1"></i></span>
                </Link>
            </li>
            <li>
                <Link to={"/Liebiao/Liebiao1"}>
                <span>影片</span>
                <span><i class="icon iconfont icon-youjiantou1"></i></span>
                </Link>
            </li>
            <li>
                <Link to={"/Yuan"}>
                <span>影院</span>
                <span><i class="icon iconfont icon-youjiantou1"></i></span>
                </Link>
            </li>
            <li>
                <Link to={"/"}>
                <span>商城</span>
                <span><i class="icon iconfont icon-youjiantou1"></i></span>
                </Link>
            </li>
            <li>
                <Link to={"Login"}>
                <span>我的</span>
                <span><i class="icon iconfont icon-youjiantou1"></i></span>
                </Link>
            </li>
            <li>
                <Link to={"/Maizuo"}>
                <span>卖座卡</span>
                <span><i class="icon iconfont icon-youjiantou1"></i></span>
                </Link>
            </li>
        </ul>
      </div>
   </div>   
 
 if(!this.state.showFlag) {
     pComp = null;
   }
 
        return(
            <div className="header">
                    <div className="tz">
                       <p className="p1" onClick={this.changeFlag}> <i className="icon iconfont icon-ego-caidan"></i></p>
                       <p className="p2">卖座电影</p>
                    </div>
                    <div className="ty">
                       <p>
                           <span>北京</span>
                           <span className="s1"><i className="icon iconfont icon-35_xiangxiajiantou"></i></span>
                       </p>
                       <p className="p3"><Link to={"/Login"}> <i className="icon iconfont icon-gerenzhongxin"></i></Link></p>
                    </div>

                    <ReactCSSTransitionGroup
                    transitionName="xyz"
                    transitionAppear={true}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                  >
                     {pComp}
                  </ReactCSSTransitionGroup>
                </div>
        )
    }


}