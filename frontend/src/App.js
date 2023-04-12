
import './App.css';
import axios from 'axios'
import {Routes,Route,Link} from "react-router-dom"
import React,{useContext, useEffect,useState} from 'react';
import Home from './pages/home';
import New from './pages/New';
import Post from './pages/post';
import imgv from './img/th.jpg';
import frame from './img/frame.jpg';
import Cart from './cart/cart';
import Register from './loginS/Register';
import { AppContext, AppProvider } from './contex/AppContext';
import Login from './loginS/login';
import Bill from './cart/bill';
import DetailItem from './content/detailItem';
import Navbar from './pages/navbar';


function App() {
  const [data,setData] = useState([]);
  const {dataContext,setDataContext,cartData,setCartData,dataLogIn,resInPost} = useContext(AppContext)
  
  useEffect(()=>{
    axios.get('http://localhost:5000/data/user')
    
    .then((res)=>{
      const getData = res.data;
      setData(getData)
    },)
   
  },[])

  const dataBaskets = dataContext.map(function(x,index){
    console.log(x);
   return x
  })
  
  function RenderPost(){
     if(resInPost.data){
      return <Post></Post>
     }else{
      return<Login></Login>
     }
  };

 function RenderBill() {
  if(resInPost.data){
      return(
          <Bill></Bill>
          )
  }else{
      return( <Login></Login>)
  }
  
}

  return (
    
    <div className='App'>
    
      <Navbar></Navbar>
      <div className='content'>
        <div className='lerftSidebar'>
        <Routes>
        <Route path='/' element={<Home data={data}/>}/>
        <Route path='/new' element={<New />}/>
        <Route path='/bill' element={<RenderBill/>}/>
        <Route path='/post' element={<RenderPost/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/detail' element={<DetailItem/>}/>
       </Routes>
        </div >
        <div className='rightSidebar'>sight Sidebar</div>
       
     
    </div>
    
    
    </div>
  
  );
}

export default App;



