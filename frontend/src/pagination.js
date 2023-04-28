import React,{useContext, useEffect,useState} from "react"

import { AppContext} from './contex/AppContext';
import ListData from "./ListData";


import { Pagination } from 'antd';
export default function CpnPagination(){
    const {dataListContent} = useContext(AppContext)
    const [all,setAll] = useState();
    const [show,setShow] = useState()
    const [amount,setAmount] = useState(10)
    console.log(dataListContent);

    function amountOfData() {
        const screenWidth = window.innerWidth;
      
        if (screenWidth >= 1600) {
          return 10;
        } else if (screenWidth >= 1200) {
          return 8;
        } else if (screenWidth >= 992) {
          return 6;
        } else if (screenWidth >= 768) {
          return 6;
        }else if(screenWidth >= 576){
            return 4;
         }else{
           return 2;   
         }
    };

    useEffect(() => {

        function handleResize() {
          const newAmount = amountOfData();
          setAmount( newAmount);
        }
    
        window.addEventListener("resize", handleResize);
    
        
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, [amount]);


    
    useEffect(()=>{
        setAll(dataListContent)
        setShow(dataListContent.slice(0,amount))
    },[dataListContent,amount])

    function onChangeC(page,pageSize){
        var start = (page-1)*pageSize;
        var end = page*pageSize;
        setShow(all.slice(start,end))

    }
    return(
        <div>
            <ListData data={show}></ListData>
            <Pagination defaultCurrent={1} total={50} defaultPageSize={8} onChange={onChangeC}/>

        </div>
        
    )

}