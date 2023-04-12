import React,{useContext, useEffect,useState} from "react"
import { AppContext } from "../contex/AppContext";
import { Link } from "react-router-dom";
import Lock from "../lock/Lock";

import '../style/home.css'

function Home(props) {

  const {dataContext,setDataContext,tongTien,setTongTien,setAmountCart,amountCart,setDataDetail,dataDetail} = useContext(AppContext)
  
  function AddToBasket(x){
      setDataContext(dataContext.concat(x))
      setTongTien(tongTien+x.gia)
      
      const zzzz={...amountCart};
      zzzz[x.name] = {sl:1}
      setAmountCart(zzzz)
      
     }
    
  function detail(x){
    setDataDetail(x)
  }
  
  const ListData = props.data.map(function(x,index){
    return(
      <div key={index} className="contentCon1">
       <img className="img" src={x.img}></img>
       <div  className="name"> {x.name}</div>
       <div className="contentAmount">
          <div className="old"> {x.gia}.vnd</div>
          <div className="soluong"> sl:{x.soluong}</div>
       </div> 
       <div className="contentAdd">
          <button onClick={()=>AddToBasket(x)}><i className="fa-solid fa-cart-arrow-down"></i></button><br/>
          <Link className="linkk" to='/detail' onClick={()=>detail(x)}><p>chi tiết</p></Link>
       </div> 
      </div>  
    )
   });
   
  return(
  <div className="content">
    <h1>Gợi Ý Hôm Nay </h1>
    
    <Lock></Lock>
    
    <div className="contentCon">
     {ListData}
    </div>
  </div>
)
}

export default Home;


