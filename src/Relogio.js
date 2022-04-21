import React, { useEffect } from "react";
import { useState } from "react";


function Relogio() {
    const [clockState, setClockState] = useState();
    useEffect(()=>{
        setInterval(() =>{
            const date = new Date();
            setClockState(date.toLocaleTimeString());
        },1000)
    },[]);
    return <div>Sorocaba : {clockState}</div>   
}
export default Relogio