import { Router } from "express";
import { OrdersController } from "../controllers/orders.controller";


export class OrdersRouter {
    private router: Router;
    constructor(
        private ordersController: OrdersController
    ){
        this.router = Router();
        this.setup();
    }

    private setup() : void {
        this.router
        .route('/orders/:orderId')
        .get(this.ordersController.getOrder
            .bind(this.ordersController));

        this.router
        .route('/orders/:orderId/distance')
        .get(this.ordersController.getDistance
            .bind(this.ordersController));
    }

    public getRouter(): Router {
        return this.router
    }
}