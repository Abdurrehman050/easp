import "./app.scss";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import React from "react";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Add from "./pages/add/Add";
import Orders from "./pages/orders/Orders";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import Admin from "./pages/admin/Admin";
import NotPay from "./pages/notPay/notPay";
import Category from "./pages/cat/Cat";
import MyGigs from "./pages/myGigs/MyGigs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Pay from "./pages/pay/Pay";
import Success from "./pages/success/Success";
import Navbar from "./components/navbar/Navbar";

import HelpSupport from "./pages/help&support/Help&support";
import AboutUs from "./pages/aboutUs/AboutUs";
import FAQ from "./pages/faqs/Faq";
import TermsAndConditions from "./pages/termANDcondition/TermsAndConditions";

function App() {
  const queryClient = new QueryClient();

  const Layout = () => {
    const location = useLocation();

    // Check if the current location is admin or category page
    const hideNavbar =
      location.pathname === "/admin" || location.pathname === "/cat";

    const hideFooter =
      location.pathname === "/admin" || location.pathname === "/cat";

    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>
          {!hideNavbar && <Navbar />}
          <Outlet />
          {!hideFooter && <Footer />}
        </QueryClientProvider>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/myGigs",
          element: <MyGigs />,
        },
        {
          path: "/cat",
          element: <Category />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/admin",
          element: <Admin />,
        },

        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
        {
          path: "/register",
          element: <Register />,
        },

        {
          path: "/termANDcondition",
          element: <TermsAndConditions />,
        },

        {
          path: "/faqs",
          element: <FAQ />,
        },
        {
          path: "/help&support",
          element: <HelpSupport />,
        },
        {
          path: "/aboutUs",
          element: <AboutUs />,
        },

        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/pay/:id",
          element: <Pay />,
        },
        {
          path: "/notpay/:id",
          element: <NotPay />,
        },
        {
          path: "/success",
          element: <Success />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
