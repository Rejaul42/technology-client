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
// import PopularBrands from './Pages/PopularBrands/PopularBrands';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
      {
        path : '/',
        element: <Home></Home>,
      },
      {
        path: '/popular_brands',
        element: <PopularBrands></PopularBrands>
      },
      {
        path:'/:brandName',
        element:<Brands></Brands>,
        // loader : () => fetch('/brand.json')
      },
      {
        path : '/addProduct',
        element: <AddProduct></AddProduct>,
      },
      {
        path: '/myCart',
        element: <MyCart></MyCart>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
