import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './Components/Pages/Register.jsx';
import Home from './Components/Home/Home.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Login from './Components/Pages/Login.jsx';
import AddProduct from './Components/AddProduct/AddProduct.jsx';
import PrivateRoute from './Routes/PrivateRoute.jsx';
import ViewProduct from './Components/AddProduct/ViewProduct.jsx';
import ViewDetails from './Components/AddProduct/ViewDetails.jsx';
import MyCart from './Components/MyCart.jsx/MyCart.jsx';
import UpdateProduct from './Components/AddProduct/UpdateProduct.jsx';
import ErrorPage from './Routes/ErrorPage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/brands.json')
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/addproduct",
        element: <PrivateRoute>
          <AddProduct></AddProduct>
        </PrivateRoute>
      },
      {
        path: "/viewproduct/:name",
        element: <ViewProduct></ViewProduct>,
        loader: () => fetch('https://fashionflare-server-4zd8mcihk-shahriar-ahmmeds-projects.vercel.app/products')
      },
      {
        path: "/viewDetails/:id",
        element: <PrivateRoute>
          <ViewDetails></ViewDetails>
        </PrivateRoute>,
        loader: () => fetch('https://fashionflare-server-4zd8mcihk-shahriar-ahmmeds-projects.vercel.app/products')
      },
      {
        path: "/mycart",
        element: <PrivateRoute>
          <MyCart></MyCart>
        </PrivateRoute>,
        loader: () => fetch('https://fashionflare-server-4zd8mcihk-shahriar-ahmmeds-projects.vercel.app/cart')
      },
      {
        path: "/update/:id",
        element: <PrivateRoute>
          <UpdateProduct></UpdateProduct>
        </PrivateRoute>,
        loader: () => fetch('https://fashionflare-server-4zd8mcihk-shahriar-ahmmeds-projects.vercel.app/products')
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
