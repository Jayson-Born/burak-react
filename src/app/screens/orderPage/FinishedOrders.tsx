import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Button, Container, Stack } from '@mui/material';
import TabContext from "@mui/lab/TabContext"
import TabPanel from '@mui/lab/TabPanel';

export default function FinishedOrders() {
    return (
        <TabPanel value={"3"}>
            <Stack>
                {[1].map((ele, index) => {
                    return (
                        <Box key={index} className={"order-main-box"}>
                            <Box className={"order-box-scroll"}>
                                {[1].map((ele2, index2) => {
                                    return (
                                        <Box key={index2} className={"orders-name-price"}>
                                            <img
                                                src={"/img/lavash.webp"}
                                                className={"order-dish-img"}
                                            />
                                            <p className={"title-dish"}>Lavash</p>
                                            <Box className={"price-box"}>
                                                <p>$9</p>
                                                <img src={"/icons/close.svg"} />
                                                <p>2</p>
                                                <img src={"/icons/pause.svg"} />
                                                <p style={{ marginLeft: "25px" }}>$18</p>
                                            </Box>
                                        </Box>

                                    )
                                })}

                            </Box>
                            <Box className={"total-price-box"}>
                                <Box className={"box-total"}>
                                    <p>Product price</p>
                                    <p>$18</p>
                                    <img 
                                    src={"/icons/plus.svg"}/>
                                    <p>$2</p>
                                    <img
                                        src={"/icons/pause.svg"}
                                        style={{ marginLeft: "20px" }}
                                    />
                                    <p>Total</p>
                                    <p>$20</p>

                                </Box>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={"cancel-button"}
                                >
                                    Done
                                </Button>
                               

                            </Box>
                        </Box>
                    )
                })}

                {false && (
                    <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
                        <img
                            src={"/icons.noimage-list.svg"}
                            style={{ width: 300, height: 300 }}
                        />
                    </Box>

                )}
            </Stack>
        </TabPanel>
    )
}