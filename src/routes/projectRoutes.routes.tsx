import { Outlet } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";


export const allProjectRoutes={
    path:'/pro',
    element:<><Outlet/></>,
    children:[
        {
            path:'home',
            element:<Home/>
        },{
            path:'login',
            element:<Login/>
        }
        ,{
            path:'register',
            element:<Register/>
        }
    ]
}