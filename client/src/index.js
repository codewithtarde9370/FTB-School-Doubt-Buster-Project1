import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Home from './../src/views/Home/Home'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import SignUp from './../src/views/Signup/Signup'
import Login from './../src/views/Login/Login'
import StudentDetailsForm from './views/StudentForm/StudentForm';
import Dashboard from './views/Dashboard/Dashboard';
import Complaint from './views/Complaint/Complaint';
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/signup",
    element: <SignUp/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  // {
  //   path: "/edit/:id",
  //   element: <Edit/>
  // },
  // {
  //   path: "/about",
  //   element: <AboutUs/>
  // },
  {
    path: "/dashboard",
    element: <Dashboard/>
  },
  {
    path:"/student-details",
    element:<StudentDetailsForm/>
  },
  {
    path:"/complaint",
    element:<Complaint/>
  },
  {
    path: "*",
    element: <h1 style={{textAlign:"center",fontWeight:'800',marginTop:'20%'}}>404 Page not found❌🥲 </h1>
  }
])
root.render(<RouterProvider router={router}/>);