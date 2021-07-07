import { Request, Response } from "express";
import { GetDistanceUseCase, GetOrderUseCase } from "../../../domain/orders/usecases";

export class OrdersController {

    constructor(
        private getOrderUseCase: GetOrderUseCase,
        private getDistanceUseCase: GetDistanceUseCase
    ){}
    
    public async getOrder(req: Request, res: Response): Promise<void> {
        this.getOrderUseCase
            .run(req.params.orderId)
            .then(result => {
                res.status(200).json(result);        
            });
    }

    public async getDistance(req: Request, res: Response): Promise<void> {
        this.getDistanceUseCase
            .run(
                req.params.orderId, 
                Number(req.query.latitude), 
                Number(req.query.longitude))
            .then(result => {
                res.status(200).json(result);                
            })
    }
}