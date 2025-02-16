
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link, useLocation } from "react-router-dom";
import HomePage from "./screens/homePage/index";
import OrdersPage from "./screens/orderPage";
import ProductsPage from "./screens/productsPage";
import UserPage from "./screens/userPage";
import HomeNavbar from "../app/components/headers/HomeNavbar";
import OtherNavbar from "../app/components/headers/OtherNavbar";
import Footer from "./components/footer";
import HelpPage from "./screens/helpPage";
import "../css/app.css";
import "../css/navbar.css"
import "../css/footer.css"
import "../css/home.css"
import { CartItem } from "../lib/types/search"
import useBasket from "./hooks/useBasket"


function App() {
  const location = useLocation();

  const { cartItems, onAdd, onRemove, onDelete, onDeleteAll } = useBasket()



  return (
    <>

      {location.pathname === "/" ? (
        <HomeNavbar 
        cartItems={cartItems}
        onAdd = {onAdd} 
        onRemove={onRemove} 
        onDelete={onDelete} 
        onDeleteAll={onDeleteAll} />
      ) : (
        <OtherNavbar 
        cartItems={cartItems} 
        onAdd = {onAdd}
        onRemove={onRemove} 
        onDelete={onDelete} 
        onDeleteAll={onDeleteAll} />
      )}
      <Switch>
        <Route path="/products">
          <ProductsPage onAdd={onAdd} />
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
      <Footer />
    </>
  );
}



export default App;
