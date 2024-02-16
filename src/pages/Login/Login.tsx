import { AppBar, Box, Button, Grid, Paper, TextField } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"

export const Login: React.FC<{}> = () => {

    let [email,setEmail]=useState<any>()
    let [password,setPassword]=useState<any>()
  const  onLoginClick=()=>{
    //call api
alert(email+password)
    }
    return <>
        <Box sx={{
            marginTop: 8,
            display: 'flex',
        }}>
            <br />
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <></>
                <>
                    <Paper sx={{width:'500px',}}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <h1>login</h1>
                            <br />
                            <br />
                            <TextField id="outlined-basic" onChange={(e)=>{setEmail(e.target.value)}} label="email" variant="outlined" />
<br />
<br />
                            <TextField id="outlined-basic"   onChange={(e)=>{setPassword(e.target.value)}}   label="password" variant="outlined" />
                            <>
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                >
                                        <Link to={"/pro/register"}>
                                    <Button variant="text">Register</Button></Link>
                                    <Link to={"/pro/home"}>
                                    <Button variant="contained" color="success" onClick={onLoginClick}>Login</Button></Link>
                                </Grid>

                            </>

                        </Grid>

                    </Paper></>
                <></>
            </Grid>



        </Box>

    </>
}