import "./App.css";
import React from "react";
import Home from "./containers/Home.js";
import About from "./containers/About.js";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Header from "./components/Header";
import Inventory from "./containers/Inventory.js";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "about", element: <About /> },
    { path: "inventory", element: <Inventory />}
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <Header/>
      <App />
    </Router>
  );
};

export default AppWrapper;
