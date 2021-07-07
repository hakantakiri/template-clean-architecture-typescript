import { OrderProvider } from "../providers/order.provider";
import { OrderEntity } from "../entities";

export class GetOrderUseCase {

    constructor(
        private orderProvider: OrderProvider
    ){}

    public async run (orderId: string):Promise<OrderEntity>{

        const order: OrderEntity = await this.orderProvider.getOrderById(orderId);
        return order;
    }
}