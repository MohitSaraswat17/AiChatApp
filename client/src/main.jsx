import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Homepage from './routes/Home/Homepage'
import Dashboardpage from './routes/Dashboard/Dashboardpage'
import Chatpage from './routes/Chat/Chatpage'
import './index.css'
import RootLayout from './layouts/rootLayout/RootLayout';
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout';
import SignInPage from './routes/SignIn/SignInPage';
import SignUpPage from './routes/SignUp/SignUpPage';






const router = createBrowserRouter([
 {
  element:<RootLayout/>,
  children:[
    {
      path:"/",
      element:<Homepage/>
    },
    {
      path:"/sign-in/*",
      element:<SignInPage/>
    },
    {
      path:"/sign-up/*",
      element:<SignUpPage/>
    },
    {
      element:<DashboardLayout/>,
      children:[
        {
          path:"/dashboard",
          element:<Dashboardpage/>
        },
        {
          path:"/dashboard/chats/:id",
          element:<Chatpage/>
        }
      ]
    }
  ]
 },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
