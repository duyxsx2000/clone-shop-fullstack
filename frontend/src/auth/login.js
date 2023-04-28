
import  axios from'axios';
import React, { useContext, useState } from "react";
import { AppContext } from '../contex/AppContext';
import '../style/login.css'
import { Button, Checkbox, Form, Input } from 'antd';





function Login(){

   const [account,setAccount] = useState();
   const [password,setPassword] = useState()
   const {dataLogIn,setDataLogIn,resInPost,setResInPost,token,setToken} = useContext(AppContext)
   const dataAcc ={acc:account,pass:password}
    
   

    function login(event){
       event.preventDefault()
        
        axios.post('http://localhost:5000/data/account?q=5',dataAcc)
                .then(function (response) {
                    
                    const resData = response.data
                   
                    setToken(resData.token)
                    setResInPost(resData)
                    if(resData){
                        setDataLogIn(1)
                    }   
                })
                .catch(function (error) {
                    console.log(error);
                });
        setAccount('')
        setPassword('')    
    }
  
    function logout(event){
        event.preventDefault()
        setResInPost({notification:'vui long dang nhap lai'})
        setDataLogIn()   
    }
   
    
    return(
        <div className="login">
            <form className='fromLogin'>
                <div>From Login</div>                   
                <input type='text'
                       value={account}
                       onChange={(e)=>{setAccount(e.target.value)}}
                       placeholder='Account'
                />
            
                <input type='password'
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    placeholder='Password'
                />
                
                <button className='button1' onClick={login}>login</button>
                <button className='button2' onClick={logout}>logout</button>
                <div className='linkR'><a href='http://localhost:3000/register'>Register Now</a></div>   
            </form>
            
        </div>
    )

}

export default Login;