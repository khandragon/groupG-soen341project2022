import "./App.css";
import React from "react";
import Home from "./containers/Home.js";
import About from "./containers/About.js";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "about", element: <About /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;