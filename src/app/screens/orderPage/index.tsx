import Container from "@mui/material/Container/Container";
import React, { SyntheticEvent, useState } from "react";
import TabContext from "@mui/lab/TabContext"
import { Box, Stack, Tab, Tabs } from "@mui/material";
import FinishedOrders from "./FinishedOrders";
import PausedOrders from "./PausedOrders";
import ProcessOrders from "./ProcessOrders";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { setPausedOrders, setProcessOrders, setFinishedOrders  } from "./slice";
import { Dispatch } from "@reduxjs/toolkit";

import "../../../css/orders.css"
import { Order } from "../../../lib/types/order";


const actionDispatch = (dispatch: Dispatch) => ({
  setPausedOrders: (data: Order[]) => dispatch(setPausedOrders(data)),
  setProcessOrders: (data: Order[]) => dispatch(setProcessOrders(data)),
  setFinishedOrders: (data: Order[]) => dispatch(setFinishedOrders(data)),
})


export default function OrdersPage(){
    const[value, setValue] = useState ("1");

    const handleChange = (e: SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return(
        <div className={"order-page"}>
            <Container className={"order-container"}>
                <Stack className={"order-left"}>
                    <TabContext value={value}>
                        <Box className={"order-nav-frame"}>
                            <Box sx={{borderBottom:1, borderColor: "divider"}}>
                                <Tabs
                                value={value}
                                onChange={handleChange}
                                aria-label="basic tabs example"
                                className={"table_list"}
                                >
                                    <Tab label ="PAUSED ORDERS" value={"1"}/>
                                    <Tab label ="PROCESS ORDERS" value={"2"}/>
                                    <Tab label ="FINISHED ORDERS" value={"3"}/>
                                    

                                </Tabs>
                            </Box>
                            <Stack className={"order-main-content"}>
                                <PausedOrders />
                                <ProcessOrders/>
                                <FinishedOrders/>

                            </Stack>
                        </Box>
                    </TabContext>
                </Stack>

                <Stack className="order-right">
          <Stack className="member-box order-info-box">
            <div className="order-user-img">
              <img
                src="/icons/default-user.svg"
                className="order-user-avatar"
              />
              <div className="order-user-icon-box">
                <img
                  src="/icons/user-badge.svg"
                  className="order-user-prof-img"
                />
              </div>
            </div>
            <Box className="order-user-name">Jayson</Box>
            <Box className="order-user-prof">Admin</Box>
            <Box className="liner" />
            <Stack className="order-user-address">
              <LocationOnIcon />
              <Box className="spec-address-text">Uzbekistan</Box>
            </Stack>
          </Stack>

          <Stack className="card-info order-info-box">
            <Box className="card-input">Card Number: *** 7777 8888 9999</Box>
            <Stack className="card-half">
              <Box className="card-half-input">12 / 22</Box>
              <Box className="card-half-input">CVV: ***</Box>
            </Stack>
            <Box className="card-input">Jayson </Box>
            <Stack className="cards-box">
              <img src="/icons/western-card.svg"></img>
              <img src="/icons/master-card.svg"></img>
              <img src="/icons/paypal-card.svg"></img>
              <img src="/icons/visa-card.svg"></img>
            </Stack>
          </Stack>
        </Stack>
            </Container>
        </div>
    )
}  


