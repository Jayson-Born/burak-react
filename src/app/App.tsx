import React from "react";
import "../css/app.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { RippleBadge } from "./MaterialTheme/styled";
import {HomePage} from "./screens/homePage/index";
import { OrdersPage } from "./screens/orderPage";
import { ProductsPage } from "./screens/productsPage";
import { UserPage } from "./screens/userPage";
function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/member-page">UserPage</Link>
          </li>
          <li>
            <Link to="/">HomePage</Link>
          </li>
        </ul>
      </nav>
      
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
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
);
}



export default App;
