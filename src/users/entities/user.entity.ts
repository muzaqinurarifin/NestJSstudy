import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Profile } from "./profile.entity.js";
import { Order } from "../../orders/entities/order.entity.js";


@Entity('users')
export class User { 
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 50 })
    name: string;

    @Column({ type: 'varchar', length: 100, unique: true })
    email: string;

    @Column({ type: 'varchar',})
    password: string;

    @OneToOne(() => Profile, { cascade: true })
    @JoinColumn({ name: 'profile_id' })
    profile: Profile;

    @OneToMany(() => Order, (order) => order.user)
    orders: Order[];

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}