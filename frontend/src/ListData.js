import React,{useContext, useEffect,useState} from "react"
import { Card, List } from 'antd';
import '../src/style/home.css'
import { AppContext } from "./contex/AppContext";
import { Link } from "react-router-dom";

export default function ListData(props){

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
  


    return(
     <List
        grid={{
          gutter: 80,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 4,
          xxl: 5,
          
          responsive: true,
        }}
     
        dataSource={props.data}
        renderItem={(item,index) => (
      <List.Item>
      <Card >
      <div key={index} className="contentCon1">
        <img className="img" src={item.img}></img>
        <div  className="name"> {item.name}</div>
        <div className="contentAmount">
            <div className="old"> {item.gia}.vnd</div>
            <div className="soluong"> sl:{item.soluong}</div>
        </div> 
        <div className="contentAdd">
            <button onClick={()=>AddToBasket(item)}><i className="fa-solid fa-cart-arrow-down"></i></button><br/>
            <Link className="linkk" to='/detail' onClick={()=>detail(item)}><p>chi tiết</p></Link>
        </div> 
      </div>  
      </Card>
    </List.Item>
    )}
  />

    )
}
