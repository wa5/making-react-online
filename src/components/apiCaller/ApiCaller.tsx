import { useEffect, useState } from "react";
import { flipkartApi } from "../../api/flipkartApi.service"
import { MyCards } from "../mui/MyCards";
import { Grid } from "@mui/material";

export const ApiCaller:React.FC<{}>=()=>{
    let [data,setDta]=useState([]);

    useEffect(()=>{
        flipkartApi().then((a:any)=>{setDta(a)});
    },[])

console.log(data)
    return <>
    <h1>this is an example of api cllling</h1>
    <Grid
  container
  direction="row"
  justifyContent="space-between"
  alignItems="center"
>
{data.map((item:any)=>{return <><MyCards img={item.image}/>
    </>})}
</Grid>

    </>
}