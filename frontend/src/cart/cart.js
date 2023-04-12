import React, { useContext, useState } from "react"; 
import { AppContext } from "../contex/AppContext";
import '../style/cart.css'
import DataCart from "./cartContent";
import Login from "../loginS/login";
import { Link } from "react-router-dom";
import Bill from "./bill";


function Cart(){
  const {cartData,setCartData,dataContext,setDataContex,tongTien,setTongTien,dataLogIn} = useContext(AppContext)
  
    return(
        <div className="body">
            <button onClick={()=>setCartData(false)}>x</button>
            <DataCart></DataCart>
            <div>
                <div>Tổng tiền: {tongTien}</div>
                <div  className="thanhtoan">
                <Link to='bill' className="thanhtoan1">PAY</Link>
                </div>
            </div>
        </div>
    )
}
export default Cart;





