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
      },
      {
        path: '/addProduct',
        element: <AddProduct></AddProduct>,
      },
      {
        path: '/myCart',
        element: <MyCart></MyCart>
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
