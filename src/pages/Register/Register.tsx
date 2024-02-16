import { AppBar, Box, Button, Grid, Paper, TextField } from "@mui/material"
import './reg.css'
import { Link } from "react-router-dom"
import { useState } from "react"
export const Register: React.FC<{}> = () => {
    let [email,setEmail]=useState<any>()
    let [name,setName]=useState<any>()
    let [password,setPassword]=useState<any>()
  const  onRegisterClick=()=>{
    //call api
alert(email+password+name)
    }
    return <>
        <Box sx={{
            marginTop: 8,
            display: 'flex',
        }}>
            <br />
            <Grid className="abc"
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
                            <h1>Register</h1>
                            <br />
                            <br />
                            <TextField id="outlined-basic" onChange={(e)=>{setName(e.target.value)}} label="name" variant="outlined" />
                            <br />
                            <br />
                            <TextField id="outlined-basic" onChange={(e)=>{setEmail(e.target.value)}} label="email" variant="outlined" />
<br />
<br />
                            <TextField id="outlined-basic" onChange={(e)=>{setPassword(e.target.value)}} label="password" variant="outlined" />
                            <>
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                >
                                    <Button variant="text" color="error" onClick={onRegisterClick}>Register</Button>
                                    <Link to={'/pro/login'}>
                                    <Button variant="contained" color="success">Login</Button></Link>
                                </Grid>

                            </>

                        </Grid>

                    </Paper></>
                <></>
            </Grid>



        </Box>

    </>
}