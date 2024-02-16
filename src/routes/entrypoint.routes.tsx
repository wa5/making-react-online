import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const entrypoint={
    path:'/',
    element:<>
    <h1>where do u want to go?</h1>
    <Link to={"/pro/login"}>
    <Button variant="contained" color="error">
project
</Button></Link>
<Link to={"/all-lessons"}>
<Button variant="contained" color="warning">
  lessons
</Button></Link>

    </>
}