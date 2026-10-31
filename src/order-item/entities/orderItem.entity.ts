import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "../../books/entities/book.entity.js";
import { Order } from "../../orders/entities/order.entity.js";

@Entity('orderItem')
export class OrderItem {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type:'int'})
    qty: number;

    @Column({type:'decimal'})
    price:number;

    @ManyToOne(() => Order)
    @JoinColumn({ name: 'order_id' })
    order: Order;

    @ManyToOne(() => Book)
    @JoinColumn({ name: 'book_id' })
    book: Book;
}