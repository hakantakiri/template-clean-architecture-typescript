import { OrderProvider } from "../providers/order.provider";
import { OrderEntity } from "../entities";

export class GetDistanceUseCase {

    constructor(
        private readonly orderProvider: OrderProvider
    ){}

    public async run (orderId: string, latitude: number, longitude: number):Promise<number>{
        const order : OrderEntity = await this.orderProvider.getOrderById(orderId);
        const distance : number = harvsineDistance(Number(order.latitude), Number(order.longitude), latitude, longitude);
        return distance;
    }   

}

const  harvsineDistance =  (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    
    const R : number = 6371e3;
    const latDiff : number = (lat2-lat1) * Math.PI / 180;
    const lonDiff : number = (lon2-lon1) * Math.PI / 180;
    lat1 = lat1 * Math.PI / 180;
    lat2 = lat2 * Math.PI / 180;
    const a : number = Math.sin(latDiff/2) * Math.sin(latDiff/2) +
    Math.sin(lonDiff/2) * Math.sin(lonDiff/2) * Math.cos(lat1) * Math.cos(lat2); 
    const d : number = R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return Math.round(d);

}
