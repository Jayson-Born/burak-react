
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
import AuthenticationModal from "./components/auth";
import { CartItem } from "../lib/types/search"
import useBasket from "./hooks/useBasket"
import { sweetErrorHandling, sweetTopSuccessAlert } from "../lib/sweetAlert";
import { T } from "../lib/types/common";
import {Messages} from "../lib/config"
import "../css/app.css";
import "../css/navbar.css"
import "../css/footer.css"
import "../css/home.css"
import { useGlobals } from "./hooks/useGlobals";
import MemberService from "./services/MemberService";




function App() {
  const location = useLocation();
  const {setAuthMember} = useGlobals();
  const { cartItems, onAdd, onRemove, onDelete, onDeleteAll } = useBasket()
  const [ signupOpen, setSignupOpen] = useState<boolean>(false);
  const [ loginOpen, setLoginOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl]= useState<HTMLElement | null>(null);
  

  /** HANDLERS **/

  const handleSignupClose = () => setSignupOpen(false);
  const handleLoginClose = () => setLoginOpen (false);

  const handleLogoutClick = (e: T) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClosetLogout = () => setAnchorEl(null);
  const handleLogoutRequest = async() => {
    try{
      const member = new MemberService();
      await member.logout();


      await sweetTopSuccessAlert("success", 5000);
      setAuthMember(null);
    } catch (err) {
      console.log(err);
      sweetErrorHandling( Messages.error1);
    }
  }



  return (
    <>

      {location.pathname === "/" ? (
        <HomeNavbar 
        cartItems={cartItems}
        onAdd={onAdd} 
        onRemove={onRemove} 
        onDelete={onDelete} 
        onDeleteAll={onDeleteAll}
        setSignupOpen={setSignupOpen}
        setLoginOpen={setLoginOpen}
        anchorEl={anchorEl}
        handleLogoutClick={handleLogoutClick}
        handleClosetLogout={handleClosetLogout}
        handleLogoutRequest={handleLogoutRequest}



         />
      ) : (
        <OtherNavbar 
        cartItems={cartItems} 
        onAdd = {onAdd}
        onRemove={onRemove} 
        onDelete={onDelete} 
        onDeleteAll={onDeleteAll} 
        setSignupOpen={setSignupOpen}
        setLoginOpen = {setLoginOpen}
        anchorEl={anchorEl}
        handleLogoutClick={handleLogoutClick}
        handleClosetLogout={handleClosetLogout}
        handleLogoutRequest={handleLogoutRequest}/>
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
      
      <AuthenticationModal
        signupOpen={signupOpen}
        loginOpen = {loginOpen}
        handleLoginClose = {handleLoginClose}
        handleSignupClose = {handleSignupClose}
        />
    </>
  );
}



export default App;
