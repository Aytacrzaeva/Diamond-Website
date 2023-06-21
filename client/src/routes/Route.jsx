import FAQ from "../components/Site/FAQ/FAQ";
import Conditions from "../pages/Site/Terms&conditions/Terms";
import Adminroot from "../pages/Admin/Adminroot/Adminroot";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import About from "../pages/Site/About/About";
import Contact from "../pages/Site/Contact/Contact";
import Forgotpass from "../pages/Site/Forgotpass/Forgotpass";
import Home from "../pages/Site/Home/Home";
import Login from "../pages/Site/Login/Login";
import Register from "../pages/Site/Register/Register";
import Siteroot from "../pages/Site/Siteroot/Siteroot";
import Delivery from "../pages/Site/Delivery/Delivery";
import Privacy from "../pages/Site/Privacy/Privacy";
import BlogPage from "../pages/Site/Blog/BlogPage";
import Map from "../pages/Site/Map/Map";
import Details from "../pages/Site/Details/Details";
import Products from "../pages/Site/Products/Products";
import Account from "../pages/Site/Account/Account";
import Wishlist from "../pages/Site/WishList/Wishlist";

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
    },{
        path:"forgotpassword",
        element:<Forgotpass/>
    },{
        path:"FAQ",
        element:<FAQ/>
    },{
        path:"terms&conditions",
        element:<Conditions/>
    },{
        path:"delivery",
        element:<Delivery/>
    },{
        path:"privacy",
        element:<Privacy/>
    },{
        path:"blogs",
        element:<BlogPage/>
    },{
        path:"address",
        element:<Map/>
    },{
        path:":id",
        element:<Details/>
    },{
        path:"products",
        element:<Products/>
    },{
        path:"acc",
        element:<Account/>
    },{
        path:"wishlist",
        element:<Wishlist/>
    }]
},{
    path:"/admin",
    element: <Adminroot/>,
    children:[{
        path:"",
        element:<Dashboard/>
    }]
}]