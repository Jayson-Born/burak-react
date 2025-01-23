import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, Container, Stack } from '@mui/material';
import TabPanel from '@mui/lab/TabPanel';
import moment from "moment"

export default function ProcessOrders() {
    return (
        <TabPanel value={"2"}>
            <Stack>
                {[1].map((ele, index) => {
                    return (
                        <Box key={index} className={"order-main-box"}>
                            <Box className={"order-box-scroll"}>
                                {[1].map((ele2, index2) => {

                                    return (
                                        <Box key={index2} className={"orders-name-price"}>
                                            <div className="order-dish-class">
                                                <img
                                                    src={"/img/lavash.webp"}
                                                    className={"order-dish-img"}
                                                />
                                                <p className={"title-dish"}>Lavash</p>

                                            </div>

                                            <Box className={"price-box"}>
                                                <p>$9</p>
                                                <img src={"/icons/close.svg"} />
                                                <p>2</p>
                                                <img src={"/icons/pause.svg"} />
                                                <p style={{ marginLeft: "25px" }}>$18</p>
                                            </Box>
                                            <p className={"data-campl"}>
                                                {moment().format("YY-MM-DD HH:mm")}
                                            </p>
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

                                <Button variant="contained" className={"pay-button"}>
                                    VERIFY TO FULFILL
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