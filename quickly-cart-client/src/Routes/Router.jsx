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
import DashboardLayout from "../pages/AdminDashboard/DashboardLayout";
import Dashboard from "../pages/AdminDashboard/Dashboard";
import AddProduct from "../pages/AdminDashboard/AddProduct";
import ManageProduct from "../pages/AdminDashboard/ManageProduct";
import EditProduct from "../pages/AdminDashboard/EditProduct";
import AllOrderProduct from "../pages/AdminDashboard/AllOrderProduct";
import History from "../pages/Cart/History";
import About from "../pages/About/About";
import Blogs from "../pages/Blogs/Blogs";

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
                path: '/about',
                element: <About></About>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
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
                path: '/checkout',
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
            },
            {
                path: '/history',
                element: <PrivateRoutes><History></History></PrivateRoutes>
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminLogin></AdminLogin>
    },
    {
        path: 'adminProfile',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '',
                element: <Dashboard></Dashboard>
            },
            {
                path: 'add-product',
                element: <AddProduct></AddProduct>
            },
            {
                path: 'manage-product',
                element: <ManageProduct></ManageProduct>
            },
            {
                path: 'manage-product/edit-product/:id',
                element: <EditProduct></EditProduct>
            },
            {
                path: 'order-product',
                element: <AllOrderProduct></AllOrderProduct>
            }
        ]
    }
])
export default router;