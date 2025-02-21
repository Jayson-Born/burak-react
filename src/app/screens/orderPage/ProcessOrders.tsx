import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, Container, Stack } from '@mui/material';
import TabPanel from '@mui/lab/TabPanel';
import moment from "moment"


import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrievePausedOrders, retrieveProcessOrders } from "./selector"
import { serverApi } from "../../../lib/config";
import { Order, OrderItem } from '../../../lib/types/order';
import { Product } from '../../../lib/types/product';

const processOrdersRetriever = createSelector(
    retrieveProcessOrders,
    (processOrders) => ({
        processOrders,
    })
);

export default function ProcessOrders() {
    const { processOrders } = useSelector(processOrdersRetriever)

    return (
        <TabPanel value={"2"}>
            <Stack>
                {processOrders.map((order: Order) => {
                    return (
                        <Box key={order._id} className={"order-main-box"}>
                            <Box className={"order-box-scroll"}>
                                {order?.orderItems?.map((item: OrderItem) => {
                                    const product: Product = order.productData.filter(
                                        (ele: Product) => item.productId === ele._id
                                    )[0];
                                    const imagePath = `${serverApi}/${product.productImages[0]}`

                                    return (
                                        <Box key={imagePath} className={"orders-name-price"}>
                                            <div className="order-dish-class">
                                                <img
                                                    src={"/img/lavash.webp"}
                                                    className={"order-dish-img"}
                                                />
                                                <p className={"title-dish"}>{product.productName}</p>

                                            </div>

                                            <Box className={"price-box"}>
                                                <p>${item.itemPrice}</p>
                                                <img src={"/icons/close.svg"} />
                                                <p>${item.itemQuantity}</p>
                                                <img src={"/icons/pause.svg"} />
                                                <p style={{ marginLeft: "25px" }}>${item.itemQuantity * item.itemPrice}</p>
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
                                    <p>${order.orderTotal = order.orderDelivery}</p>
                                    <img
                                        src={"/icons/plus.svg"} style={{ marginLeft: "20px" }} />
                                    <p>Delivery cost</p>
                                    <p>${order.orderDelivery}</p>
                                    <img
                                        src={"/icons/pause.svg"}
                                        style={{ marginLeft: "20px" }}
                                    />
                                    <p>Total</p>
                                    <p>${order.orderTotal}</p>

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