import { PostgresDB } from "../../infra/db/pg.config";
import { GetDistanceUseCase, GetOrderUseCase } from "../../domain/orders/usecases";
import { OrdersController } from "./controllers/orders.controller";
import { OrderService } from "../../services";
import { ExpressAPI } from "./express";
import { OrdersRouter } from "./router/order.router";

export class API {
    public run () {
        let postgresDB = PostgresDB;
        let orderSerivce = new OrderService(postgresDB);
        let getOrderUseCase = new GetOrderUseCase(orderSerivce);
        let getDistanceUseCase = new GetDistanceUseCase(orderSerivce);
        let ordersController = new OrdersController(getOrderUseCase, getDistanceUseCase);
        let orderRouter = new OrdersRouter(ordersController);
        const expressAPI = new ExpressAPI(orderRouter);
        expressAPI.start(3000);
    }
};