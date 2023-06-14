import Adminroot from "../pages/Admin/Adminroot/Adminroot";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import About from "../pages/Site/About/About";
import Contact from "../pages/Site/Contact/Contact";
import Home from "../pages/Site/Home/Home";
import Login from "../pages/Site/Login/Login";
import Register from "../pages/Site/Register/Register";
import Siteroot from "../pages/Site/Siteroot/Siteroot";

export const ROUTES=[{
    path:"/",
    element: <Siteroot/>,
    children:[{
        path:"",
        element:<Home/>
    },{
        path:"about",
        element:<About/>
    },{
        path:"contact",
        element:<Contact/>
    },{
        path:"login",
        element:<Login/>
    },{
        path:"register",
        element:<Register/>
    }]
},{
    path:"/admin",
    element: <Adminroot/>,
    children:[{
        path:"",
        element:<Dashboard/>
    }]
}]