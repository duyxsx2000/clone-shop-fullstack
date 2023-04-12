import React, { useContext } from "react";
import {Routes,Route,Link} from "react-router-dom"
import App from "../App";
import imgv from '../img/th.jpg';
import Cart from "../cart/cart";
import { AppContext } from "../contex/AppContext";


export default function Navbar(){
   const {dataContext,setDataContext,cartData,setCartData,dataLogIn,resInPost} = useContext(AppContext)
    return(
        <div className='hearder'>
        <nav className='headerTop1'>
        <ul className='ul1'>
          <li>
            <Link to='/'><i className="fa-solid fa-house"></i>HOME</Link>
          </li>
          <li>
            <Link to='/new'>NEW</Link>
          </li>
          <li>
            <Link to='/post'>POST</Link>
          </li>
        </ul>
        <ul className='ul2'>
          <li>
            <a href='#'> <i className="fa-solid fa-bell"></i> Thông Báo</a>
          </li>
          <li>
            <a href='#'> <i className="fa-regular fa-circle-question"></i> Hỗ Trợ</a>
          </li>
          <li>
          <Link to='/register'>Dang Ky</Link>
          </li>
          <li>
          <Link to='/login'>Dang Nhap</Link>  
          </li>
        </ul>
      </nav>

      <div className='hearderBotton'>
            <img src={imgv}></img>
            <div className='xxx'>
              <input type='text' placeholder='tim kiem'></input>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className='cartBoss'>
              <a href='#'><i className="fa-solid fa-cart-shopping" onClick={()=>setCartData(true)}>{dataContext.length}</i></a>
              <div className='cartBoss1'>
                {cartData && <Cart></Cart>}
              </div>
            </div>
          </div>
      </div>)
}