import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Pages/Root/Root';
import Home from './Pages/Home/Home';
import AddProduct from './Pages/AddProduct/AddProduct';
import MyCart from './Pages/MyCart/MyCart';
import PopularBrands from './Pages/PopularBrands/PopularBrands';
import Brands from './Pages/Brands/Brands';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import AuthProvider from './Provider/AuthProvider';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import JoinUs from './Pages/JoinUs/JoinUs';
import UpdateProduct from './Pages/UpdateProduct/UpdateProduct';
import Details from './Pages/Details/Details';
import PriveteRoute from './Provider/Route/PriveteRoute';
// import PopularBrands from './Pages/PopularBrands/PopularBrands';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/popular_brands',
        element: <PopularBrands></PopularBrands>
      },
      {
        path: '/:brandName',
        element: <Brands></Brands>,
        loader: () => fetch("https://technology-and-electronics-server-ruddy.vercel.app/product")
      },
      {
        path: '/addProduct',
        element: <PriveteRoute><AddProduct></AddProduct></PriveteRoute>,
      },
      {
        path: '/:brandName/:id',
        element: <PriveteRoute><UpdateProduct></UpdateProduct></PriveteRoute>,
        loader: ({ params }) => fetch(`https://technology-and-electronics-server-ruddy.vercel.app/product/${params.id}`)
      },
      {
        path: '/details/:id',
        element: <PriveteRoute><Details></Details></PriveteRoute>,
        loader: ({ params }) => fetch(`https://technology-and-electronics-server-ruddy.vercel.app/product/${params.id}`)
      },
      {
        path: "/joinUs",
        element: <JoinUs></JoinUs>
      },
      {
        path: '/myCart',
        element: <PriveteRoute><MyCart></MyCart></PriveteRoute>,
        loader: () => fetch("https://technology-and-electronics-server-ruddy.vercel.app/cart"),
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
