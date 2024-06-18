import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage";
import Dashboard from "../layouts/Dashboard";
import Cart from "../pages/Dashboard/Cart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddPackage from "../pages/Dashboard/AddPackage/AddPackage";
import AdminRoute from "./AdminRoute";
import ManagePackages from "../pages/Dashboard/ManagePackages/ManagePackages";
import UpdatePackage from "../pages/Dashboard/UpdatePackage/UpdatePackage";
import Payment from "../pages/Dashboard/Payment/Payment";
import AllGuides from "../pages/AllGuides";
import AllPackages from "../pages/AllPackages";
import AllStories from "../pages/AllStories";
import PackageDetails from "../components/Packages/PackageDetails";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <Home/>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/packages`)
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                 path: '/allGuides',
                 element: <AllGuides/>   
            },
            {
                path: '/allPackages',
                element: <AllPackages/>
            },
            {
                path: '/packageDetails/:id',
                element: <PackageDetails/>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/packages/${params.id}`)
            },
            {
                path: '/allStories',
                element: <AllStories/>
            },
            {
                path: 'dashboard',
                element: <PrivateRoute><Dashboard/></PrivateRoute>,
                children: [
                    {
                        path: 'cart',
                        element: <Cart/>
                    },
                    {
                        path: 'payment',
                        element: <Payment/>
                    },

                    // admin routes
                    {
                        path: '/dashboard/manageUsers',
                        element: <AllUsers/>
                    },
                    {
                        path: '/dashboard/addPackage',
                        element: <AdminRoute><AddPackage/></AdminRoute>
                    },
                    {
                        path: '/dashboard/managePackages',
                        element: <AdminRoute><ManagePackages/></AdminRoute>
                    },
                    {
                        path: '/dashboard/updatePackage/:id',
                        element: <AdminRoute><UpdatePackage/></AdminRoute>,
                        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/packages/${params.id}`)
                    }

                ]
            }
        ]
    }
]);

export default router;