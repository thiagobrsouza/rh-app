import { Department } from "src/departments/entities/department.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('employees')
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  birthDate: string;

  @Column({ nullable: false, unique: true })
  cpf: string;

  @Column({ nullable: false })
  rg: string;

  @Column({ nullable: false, type: 'decimal', precision: 15, scale: 2 })
  salary: number;

  @ManyToOne(() => Department, (department) => department.employees)
  department: Department;

  @CreateDateColumn()
  createdAt: Date;
}
