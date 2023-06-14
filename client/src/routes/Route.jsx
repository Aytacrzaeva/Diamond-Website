import Adminroot from "../pages/Admin/Adminroot/Adminroot";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import Home from "../pages/Site/Home/Home";
import Siteroot from "../pages/Site/Siteroot/Siteroot";

export const ROUTES=[{
    path:"/",
    element: <Siteroot/>,
    children:[{
        path:"",
        element:<Home/>
    }]
},{
    path:"/admin",
    element: <Adminroot/>,
    children:[{
        path:"",
        element:<Dashboard/>
    }]
}]