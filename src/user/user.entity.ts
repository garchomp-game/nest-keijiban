import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    name: string;

    @Column('text')
    password: string;

    @Column()
    age: number;
}
