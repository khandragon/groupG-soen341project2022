import "./App.css";
import React, { useState } from "react";
import Home from "./containers/Home.js";
import About from "./containers/About.js";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Header from "./components/Header";
import Inventory from "./containers/Inventory.js";
import Product from "./containers/Product";
import Profile from "./containers/Profile.js";
import ProfileBusiness from "./containers/ProfileBusiness.js";
import Footer from "./components/Footer";
import Login from "./containers/Login";
import Register from "./containers/Register";
import ProfileType from "./containers/ProfileType";
import CreateEditProduct from "./containers/CreateEditProduct";
import Cart from "./containers/Cart";
import OrderHistory from "./containers/OrderHistory";
import BuisnessProducts from "./containers/BuisnessProducts";
import Shipping from "./containers/Shipping";
import OrderConfirmation from "./containers/OrderConfirmation";
import ContactUs from "./containers/ContactUs";
import Sale from "./containers/Sale";
import Payment from "./containers/Payment";
import Admin from "./containers/Admin";
import OrderInfo from "./containers/OrderInfo";
import Categories from "./containers/Categories";
import Category from "./containers/Category";
import { LoginContext } from "./containers/LoginContext";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/About", element: <About /> },
    { path: "/Login", element: <Login /> },
    { path: "/Register/:registerType", element: <Register /> },
    { path: "/Products", element: <Inventory /> },
    { path: "/Products/:productID", element: <Product /> },
    { path: "/Profile", element: <Profile /> },
    { path: "/ProfileBusiness", element: <ProfileBusiness /> },
    { path: "/BuisnessProducts", element: <BuisnessProducts /> },
    { path: "/ProfileType", element: <ProfileType /> },
    { path: "/CreateEditProduct", element: <CreateEditProduct /> },
    { path: "/Cart", element: <Cart /> },
    { path: "/OrderHistory", element: <OrderHistory /> },
    { path: "/Shipping", element: <Shipping /> },
    { path: "/OrderConfirmation", element: <OrderConfirmation /> },
    { path: "/ContactUs", element: <ContactUs /> },
    { path: "/Sale", element: <Sale /> },
    { path: "/Payment", element: <Payment /> },
    { path: "/Admin", element: <Admin /> },
    { path: "/Categories", element: <Categories /> },
    { path: "/Categories/:category", element: <Category /> },
    { path: "/OrderInfo", element: <OrderInfo /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  const [loggedIn, setUserLoggedIn] = useState(
    localStorage.getItem("LoggedIn")
  );

  return (
    <LoginContext.Provider value={[loggedIn, setUserLoggedIn]}>
      <Router>
        <Header />
        <App />
        <Footer />
      </Router>
    </LoginContext.Provider>
  );
};

export default AppWrapper;
