import axios from "axios";
import { serverApi } from "../../lib/config";
import { CartItem } from "../../lib/types/search";
import { Order, OrderItemInput } from "../../lib/types/order";



class OrderService {
    private readonly path: string;

    constructor() {
        this.path = serverApi;
    }


public async createOrder(input: CartItem[]): Promise<Order> {
    try{
    const orderItems: OrderItemInput [] = input.map((cartItem: CartItem) => {
        return{
            itemQuantity: cartItem.quantity,
            itemPrice: cartItem.price,
            productId: cartItem._id,
        };
    });
    
    const url = this.path + "/order/create";
    const result = await axios.post(url,orderItems, {
        withCredentials: true,
    });
    console.log("createOrder:", result);

    return result.data
}catch (err) {
    console.log("Error. createOrder:", err);
    throw err;
}
}}

export default OrderService;



