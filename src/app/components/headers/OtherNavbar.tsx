import { Box, Button, Container, Stack } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import { CartItem } from "../../../lib/types/search";

interface OtherNavbarProps{
    cartItems: CartItem[]
}

export default function OtherNavbar(props: OtherNavbarProps) {
    const {cartItems}= props;
    const authMember= null;
    return(
        <div className="other-navbar"> 
        <Container className="navbar-container">
           <Stack className="menu">
                   <Box className= {"hover-line"}>
                       <NavLink to="/" >
                           <img className="brand-logo"
                               src="/icons/burak.svg"
                           ></img>
                       </NavLink>
                   </Box>
                   <Stack className="links">
                   <Box className= {"hover-line"}>
                       <NavLink to="/">
                       Home
                       </NavLink>
                   </Box>
   
                   <Box className= {"hover-line"}>
                       <NavLink to="/products" activeClassName={"underline"}>
                           Products
                       </NavLink>
                   </Box>
   
                   {authMember ? (
                       <Box className= {"hover-line"}>
                           <NavLink to="/" activeClassName={"underline"}>
                           Orders
                           </NavLink>
                       </Box>
                   ): null}
   
                   
                   {authMember ? (
                       <Box className= {"hover-line"}>
                           <NavLink to="/member-page" activeClassName={"underline"}>
                           My Page
                           </NavLink>
                       </Box>
                   ): null}
   
                   <Box className= {"hover-line"}>
                       <NavLink to="/help" activeClassName={"underline"}>
                       Help
                       </NavLink>
                   </Box>
                 
                   <Basket cartItems = {cartItems}/>
                   {!authMember ? (
                       <Box >
                           <Button 
                           variant="contained"
                           style={{background:"#3776CC", color: "#f8f8ff"}}
                           >
                               Login
                           </Button>
                       </Box>
                   ): (
                       <img 
                       className="user-avatar"
                       src={"/icons/default-user.svg"}
                       aria-haspopup={"true"}
                       />
                   )}
   
               </Stack>
           </Stack>
          
        </Container>
       </div>
       )
}