import express, { Application } from "express";
import { OrdersRouter } from "./router/order.router";

export class ExpressAPI {

    private app: Application;

    constructor(
        private ordersRouter: OrdersRouter
    ){
        this.app = express();
        this.setRouters();
    }

    private setRouters() {
        this.app.use('/v1', this.ordersRouter.getRouter());
    }

    public start = (port: number) => {
        return new Promise((resolve, reject) => {
            this.app.listen(port, () => {
                console.log(`Running on port ${port}`)
                resolve(port);
            }).on('error', (err: Object) => reject(err));
        })
    }
}


// private config(){
    // this.app.use(bodyParser.urlencoded({extended: true}));
    // this.app.use(bodyParser.json({limit: '1mb'}));
// }

