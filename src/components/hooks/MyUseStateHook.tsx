import { useState } from "react";

export const MyUseStateHook:React.FC<{}>=()=>{
    let showdrta="fitst time";
    let [data,setData]=useState("fitsr tme")
    return <>
    <input type="text" name="" id="" onChange={(e)=>{console.log(e.target.value);setData(e.target.value)}} />
    <>{data}</>
    </>
}