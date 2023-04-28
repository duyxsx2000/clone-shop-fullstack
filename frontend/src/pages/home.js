import React,{useContext, useEffect,useState} from "react"
import { AppContext } from "../contex/AppContext";
import { Link } from "react-router-dom";
import Lock from "../lock/Lock";
import '../style/home.css'
import Pagination from "../pagination";

function Home(props) {


   
  return(
  <div className="content">
    <h1>Gợi Ý Hôm Nay </h1>
    
    <Lock></Lock>
    
    <div className="contentCon">
     {/* {ListData} */}
     
     <Pagination></Pagination>
    </div>
  </div>
)
}

export default Home;


