import React, { useEffect, useState } from "react";



export default function Lock(){
 function formatData(date){
    if(!date)return '';
    const H = date.getHours()
    const m = date.getMinutes()
    const s = date.getSeconds()
    return `${H}:${m}:${s}`;
 }

 const [timeString,setTimeString] = useState();

 useEffect(()=>{
    const clockInterval = setInterval(()=>{
        const now = new Date();
        const newTimeString = formatData(now)
        setTimeString(newTimeString);
    },1000)
 },[])

    return(
        <div style={{fontSize:'30px'}}>{timeString}</div>
    )
}