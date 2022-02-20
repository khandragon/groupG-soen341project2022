import "./App.css";
import React from "react";
import Home from "./containers/Home.js";
import About from "./containers/About.js";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Header from "./components/Header";
import Inventory from "./containers/Inventory.js";
import Profile from "./containers/Profile.js";
import ProfileBusiness from "./containers/ProfileBusiness.js";
import Footer from "./components/Footer";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "about", element: <About /> },
    { path: "products", element: <Inventory /> },
    { path: "profile", element: <Profile /> },
    { path: "profileBusiness", element: <ProfileBusiness /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <Header />
      <App />
      <Footer />
    </Router>
  );
};

export default AppWrapper;
