import { OrderEntity } from "../entities";

export interface  OrderProvider {
    
    getOrderById(id: string):Promise<OrderEntity>

    // updateOrder(id: string, order: OrderEntity): Promise<void>

}
