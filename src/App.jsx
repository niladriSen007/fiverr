import React from 'react'
import Navbar from './components/Navbar'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Gigs from './pages/Gigs';
import Gig from './pages/Gig';
import Orders from './pages/Orders';
import MyGigs from './pages/MyGigs';
import Add from './pages/Add';
import Messages from './pages/Messages';
import Message from './pages/Message';
import Register from './pages/Register';
import Footer from './components/Footer';
const App = () => {



  const Layout = () =>(
    <div>
          <Navbar />
           <div style={{flex:"4"}}>
                <Outlet />
          </div>
          <Footer />
    </div>
  )


  const router = createBrowserRouter([
    {
      path: "/",
      element:(
           <Layout />
      ),
      children:[
        {
          path:"/",
          element: <Home />
        },
        
        {
          path:"/gigs",
          element: <Gigs />
        },
        {
          path:"/gig/:id",
          element: <Gig />
        },
        {
          path:"/orders",
          element: <Orders />
        },
        {
          path:"/mygigs",
          element: <MyGigs />
        },
        {
          path:"/add",
          element: <Add />
        },
        {
          path:"/messages",
          element: <Messages />
        },
        {
          path:"/message/:id",
          element: <Message />
        }

      ],

    },
    {
        path:"/gigs",
        element: <Login />
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

   return (
      <RouterProvider router={router}/>
  );
}

export default App