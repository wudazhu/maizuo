import React,{Component} from 'react';
import '../style/public.css'
import '../style/shouye.css'
import axios from 'axios';
import Header from './Header'
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
import {Link} from 'react-router-dom';

export default class Shouye extends Component{
    constructor(props){
        super(props);

        this.state = {
            data: ['1', '2', '3'],
            films:[],
            films2:[]
          }

      
    }

 componentDidMount(){
            // simulate img loading
            axios.get("v4/api/billboard/home?__t=1519645498880")
            .then((res)=>{
                console.log(res);
                    this.setState({
                        data: res.data.data.billboards
                    })
            });

            axios.get("/v4/api/film/now-playing?__t=1519610967079&page=1&count=5")
           .then((res)=>{
           console.log(res);
           this.setState({
           films: res.data.data.films
              })
           });
           
           axios.get("v4/api/film/coming-soon?__t=1519696155929&page=1&count=3")
           .then((res)=>{
           console.log(res);
           this.setState({
           films2: res.data.data.films
              })
           });
          }

    render(){
        return(
            <div className="div">
               
                <Header></Header>


 
<div className="section">
<div className="lun">
   <Carousel
          autoplay={true}
          infinite
          selectedIndex={1}
        >
          {this.state.data.map(item => (
            <a href="#" key={item.id} style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}>
              <img
                src={item.imageUrl}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>

</div>

      <div className="lie">
      <ul>
        {
          this.state.films.map((item, index)=>{
            return (
              <li key={item.id}>
              <Link to={"/Xiangq/" + item.id} >
                <img src={item.cover.origin} />
                <div className="shuo">
                   <p className="p1" style={{fontSize:'12px'}}>
                   <span>{item.name}</span>
                   <span style={{color:'#999'}}>{item.cinemaCount}家影院上映{item.watchCount}人购票</span>
                   </p>
                   <p style={{color:'orange',fontSize:'16px'}}>{item.grade}</p>
                </div>
                </Link>
              </li>
            )
          })
        }
        </ul>
      </div>


      {/* 更多热议电影 */}
      <div className="geng">
         <span><Link to={"/Liebiao/Liebiao1"}>更多热议电影</Link></span>
      </div>
     
     <div className="ji">
         <span>即将上映</span>
     </div>
     
     <div className="jijiang">
     <ul>
        {
          this.state.films2.map((item, index)=>{
            return (
              <li key={item.id}>
                 <Link to={"/Xiangq/" + item.id}>
                <img src={item.cover.origin} />
                <p>
                    <span>{item.name}</span>
                    <span style={{color:'orange'}}>3月2日上映</span>
                </p>
                </Link>
              </li>
            )
          })
        }
    </ul>
     </div>

     <div className="gj">
           <span><Link to={"/Liebiao/Liebiao2"}>更多即将上映电影</Link></span>
     </div>

    </div>
 </div>
        )
    }
}