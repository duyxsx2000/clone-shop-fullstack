import React, { useContext, useState } from "react";
import { AppContext } from "../contex/AppContext";
import axios from "axios";

import '../style/bill.css'


function Bill(){
  const {resInPost,setResInPost,tongTien,setTongTien} = useContext(AppContext) 
  const [taiKhoan,setTaiKhoan] =  useState(resInPost.data[0].taikhoan)
  const [notification,setNotification] = useState(false)
  
  let user = resInPost.data[0].acc
     
  function ThanhToan(){
    
      const abc = {...resInPost}
      abc.data[0].taikhoan = abc.data[0].taikhoan - tongTien
      console.log(abc.data[0].taikhoan);
      console.log(abc);
      setResInPost(abc)
      axios.post('http://localhost:5000/data/upDataU',resInPost)
     setTongTien(0)    
   }
   
  return(
    <div className="Bill">
        <div className="title"> <p>Trang Thanh toán</p></div>
        <div> <p>Xin chào:{user}</p></div>
        <div> <p>số dư tài khoản của bạn là:{taiKhoan}</p> </div>
        <div> <p>so tien can thanh toan la:{tongTien}</p></div>
        <button onClick={ThanhToan}>xac nhan thanh toan</button>
        {tongTien==0 && <div>thanh toan thanh cong, vui long ve trang home chon them san pham can mua</div>}
      

    </div>
  )

}



export default Bill;