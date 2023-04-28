import React, { useState } from "react";
import axios from "axios";
import '../style/register.css'


function Register() {
    const [dataRegisteR,setDataRegister] = useState();
    const [dataAcc,setDataAcc] = useState();
    const [dataPass,setDataPass] = useState();
    const [dataSdt,setDataSdt] = useState();
    
    const dataRegister = {acc:dataAcc,
        pass:dataPass,
        sdt:dataSdt,
        taikhoan:0};
  
    function dangky(event){
    event.preventDefault()
    axios.post('http://localhost:5000/data/register',dataRegister)
          .then(function (response) {
          })
         .catch(function (error) {
          console.log(error);
          });
           
       setDataRegister(dataRegister)
       console.log(dataRegister);
       return ''
    }
    return(
        <div className="register">
            <from className="fromRegister">
               <h1 id="aaa">From Register</h1>
               <div className="registrationline">
                    <label>ACCOUNT</label>
                    <input type='text'
                        value={dataAcc}
                        onChange={(e)=>setDataAcc(e.target.value)}>
                    </input>
              </div>
              <div className="registrationline">
                    <label>PASSWORD</label>
                    <input type='password'
                        value={dataPass}
                        onChange={(e)=>setDataPass(e.target.value)}>
                    </input>
             </div>
             <div className="registrationline">
                    <label>SDT </label>
                    <input type='text'
                        value={dataSdt}
                        onChange={(e)=>setDataSdt(e.target.value)}>
                    </input>
             </div>
                <button onClick={dangky} >Dang Ky</button>
            </from>
        </div>
    )
}


export default Register;