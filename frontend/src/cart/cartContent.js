import React, { useContext, useState } from "react"
import { AppContext } from "../contex/AppContext"




function DataCart(){
    const {dataContext} = useContext(AppContext)
    const {setTongTien,tongTien,amountCart,setAmountCart}= useContext(AppContext)
      
    function Xnxxxx(x){
        const gia = x.gia
        
        function increaseT(gia){ 

            setTongTien(tongTien+gia.gia)      
            const obj = {...amountCart};
            obj[gia.name] = {sl:amountCart[gia.name].sl+1};
            setAmountCart(obj)

        }
     
        function increaseG(gia){

            setTongTien(tongTien-gia.gia)
            const obj ={...amountCart};
            obj[gia.name] = {sl:amountCart[gia.name].sl-1}
            setAmountCart(obj)
        }
        
        return(
            <div className="btn"> 
                <button onClick={() =>{increaseT(gia)}}>+</button>
                {amountCart[x.gia.name].sl}
                <button onClick={()=>{increaseG(gia)}}>-</button> 
           </div>
        )
        
    
    } 

    const DataCartV = dataContext.map(function(x){
    
       
        
       return ( 
       <div className="contentCart">
            <div>
                <p>Tên sản phẩm: {x.name}</p>
                <p>Giá:{x.gia}VND</p>
                <p>số lượng: {x.soluong}</p>
                <Xnxxxx gia={x}/>
            </div>
           
        
        </div>)
    })

           
        
     
     

   
    
    
    
   
    
    
   
    return( <div>
       {DataCartV}
       </div>
    )     
       
    
}
export default DataCart;










