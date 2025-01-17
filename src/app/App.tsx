import React from "react";
import { BrowserRouter as Router, Route, Switch, Link, useLocation } from "react-router-dom";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { RippleBadge } from "./MaterialTheme/styled";
import HomePage from "./screens/homePage/index";
import  OrdersPage  from "./screens/orderPage";
import ProductsPage  from "./screens/productsPage";
import  UserPage   from "./screens/userPage";
import  HomeNavbar  from "../app/components/headers/HomeNavbar";
import  OtherNavbar  from "../app/components/headers/OtherNavbar";
import Footer  from "./components/footer";
import  HelpPage  from "./screens/helpPage";
import "../css/app.css";
import "../css/navbar.css"
import "../css/footer.css"


function App() {
  const location = useLocation()
  
  console.log ("location:", location)
  return (
    <>
     
      {location.pathname === "/" ? <HomeNavbar/> : <OtherNavbar />}
      <Switch>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/member-page">
          <UserPage />
          </Route>
        <Route path="/help">
          <HelpPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer/>
    </>
);
}



export default App;
