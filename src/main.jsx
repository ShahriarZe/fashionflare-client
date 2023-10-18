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
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('brands.json')
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
