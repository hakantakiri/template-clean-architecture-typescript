import { PostgresDB } from "../infra/db/pg.config";
import { OrderProvider } from "../domain/orders/providers/order.provider";
import { OrderEntity } from "../domain/orders/entities";

export class OrderService implements OrderProvider {

    constructor(
        private db: typeof PostgresDB
    ){
    }    
    async getOrderById(orderId: string): Promise<OrderEntity> {

        const con = await this.db.connect();
        const [query, params] = [
            `SELECT 
            order_id as "orderId", 
            courier_id as "courierId",
            delivery_datetime as "deliveryDateTime",
            delivery_address as "deliveryAddress",
            latitude,
            longitude
            FROM orders WHERE order_id = $1;`, [orderId]];
        const order: OrderEntity = (await con.query(query, params)).rows[0];
        return order;
    }
    
    async updateOrder(orderId: string, order: OrderEntity): Promise<void>{}
    
}

