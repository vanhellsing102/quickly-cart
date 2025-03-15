import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home/Home";
import ProductDetails from "../components/ProductDetails";
import OccasionProducts from "../pages/Home/DisForOccasion/OccasionProducts";
import KidsAllProducts from "../pages/Home/GiftsForKids/KidsAllProducts";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import BrandProducts from "../components/BrandProducts";
import Cart from '../pages/Cart/Cart';
import Shop from '../pages/Shop/Shop';
import Checkout from "../pages/Cart/Checkout";
import Orders from "../pages/Cart/Orders";
import AdminLogin from "../pages/AdminDashboard/AdminLogin";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/shop',
                element: <Shop></Shop>
            },
            {
                path: '/product-details/:id',
                element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>
            },
            {
                path: '/occasion-products/:subcategory',
                element: <OccasionProducts></OccasionProducts>
            },
            {
                path: '/kids-products',
                element: <KidsAllProducts></KidsAllProducts>
            },
            {
                path: '/cart',
                element: <PrivateRoutes><Cart></Cart></PrivateRoutes>
            },
            {
                path: '/checkout/:totalAmount',
                element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: '/brand-products/:brand',
                element: <BrandProducts></BrandProducts>
            },
            {
                path: '/orders',
                element: <PrivateRoutes><Orders></Orders></PrivateRoutes>
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminLogin></AdminLogin>
    }
])
export default router;