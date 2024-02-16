import { Grid } from "@mui/material"
import { MyCards } from "../mui/MyCards"
import img from '../../static/image/1.jpg'
import img2 from '../../static/image/2.jpg'
import img3 from '../../static/image/3.jpg'
import img4 from '../../static/image/4.jpg'
export const CardConatiner:React.FC<{}>=()=>{

    let arry=[<MyCards img={img}/>,<MyCards img={img2}/>,<MyCards img={img3}/>]
    return <>
    <Grid
  container
  direction="row"
  justifyContent="space-around"
  alignItems="center"
>
{ arry}
</Grid>
  </>
}