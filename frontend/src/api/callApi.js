import axios from "axios";


export const apiLogin = (data)=>{axios.post('http://localhost:5000/data/account?q=5',data)}
export const apiRegister = (data)=> axios.post('http://localhost:5000/data/register',data)
export const apiBill = (data)=>  axios.post('http://localhost:5000/data/upDataU',data)





