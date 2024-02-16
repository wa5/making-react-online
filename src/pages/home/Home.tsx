import { Box, Grid } from "@mui/material"
import { MyNavbar } from "../../components/navbar/MyNavbar"
import { MySlider } from "../../components/Myslider/MySlider"
import { ApiCaller } from "../../components/apiCaller/ApiCaller"

export const Home:React.FC<{}>=()=>{
    return <>
<Box>
<Grid

  direction="column"
  justifyContent="center"
  alignItems="stretch"
>
    <MyNavbar/>
    <br/>
    <>
    < MySlider/>
    </>
    < ApiCaller/>

</Grid>
</Box>
    </>
}