import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity('students')
export class Student {
	@PrimaryGeneratedColumn()
	id: number;
	@Column()
	email: string;
	@Column('jsonb', { nullable: true })
	password: string;
	@Column()
	age: number;
}
