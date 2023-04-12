import React, { useContext } from "react";
import { AppContext } from "../contex/AppContext";

import '../style/detail.css'
export default function DetailItem(){
  const {dataDetail,setDataDetail,setDataContext,setTongTien,setAmountCart,dataContext,tongTien,amountCart} = useContext(AppContext)
  console.log(dataDetail);
  function AddToBasket(x){
    console.log(x.gia,'x')
    setDataContext(dataContext.concat(x))
    setTongTien(tongTien+x.gia)
    
    const zzzz={...amountCart};
    zzzz[x.name] = {sl:1}
    setAmountCart(zzzz)
    console.log(tongTien);
   }
    return(
        <div className="DetailItem">
            <div className="contentDetailItem">

                <img src={dataDetail.img}></img>
                <p>{dataDetail.name}</p>
                <p>Miêu tả sản phầm:??????????</p>
                <button onClick={AddToBasket}><p>Thêm vào giỏ hàng</p></button>

            </div>
            
        </div>
    )
}