import { GetDistanceUseCase, GetOrderUseCase } from "../../src/domain/orders/usecases";
import { OrderEntity } from "../../src/domain/orders/entities/order.entity";
import { orderMockData } from "../mocks/order.data";
import { OrderService } from "../../src/services/";
import { PostgresDB } from "../../src/infra/db/pg.config";
import { OrderProvider } from "../../src/domain/orders/providers/order.provider";

class OrderMockService implements OrderProvider {
    public async getOrderById(ordeId: string): Promise<OrderEntity>{
        const order: OrderEntity = orderMockData;
        return order;
    }
}

test('Test GetOrder usecase', async ()=> {
    const useCase = new GetOrderUseCase(new OrderMockService);
    const order = await useCase.run(orderMockData.orderId);
    expect(order).toStrictEqual(orderMockData);
});

test('Test GetOrder usecase and service', async ()=> {
    const orderService = new OrderService(PostgresDB);
    const useCase = new GetOrderUseCase(orderService);
    const order = await useCase.run(orderMockData.orderId);
    expect(order).toStrictEqual(orderMockData);
});

test('Test GetDistance usecase', async ()=> {
    const useCase = new GetDistanceUseCase(new OrderMockService);
    const order = await useCase.run(orderMockData.orderId, -12.09662467181187, -77.07322961138149 );
    expect(order).toBe(5170);
});

test('Test GetDistance usecase and OrderService', async ()=> {
    const orderService = new OrderService(PostgresDB);
    const useCase = new GetDistanceUseCase(orderService);
    const order = await useCase.run(orderMockData.orderId, -12.09662467181187, -77.07322961138149 );
    expect(order).toBe(5170);
});