import { Module } from '@nestjs/common';
import { OrderItemController } from './order-item.controller.js';

@Module({
  controllers: [OrderItemController]
})
export class OrderItemModule {}
