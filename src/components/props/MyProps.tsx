export const MyProps:React.FC<{}>=()=>{
    return <>
  <center> <h1>props concept</h1></center> 
       <h2>jhoti:{Parlur(
        {type:"black current",
           abc: 0}
           )}</h2>
       <h2>purjirtha:{Parlur(
        {
           type: "chocalate",
           abc: 0
       }
       )}</h2>
       <h1>jayanth: <Parlur type={"pista"} abc={0} /></h1>
       
       {/* <Parlur/> */}
    </>
}
interface IParlur{
    type:any,
    abc:number

}
let Parlur:React.FC<IParlur>=(props)=>{
    return <span>icecreem {props.type}</span>
}

function Abc({}){}