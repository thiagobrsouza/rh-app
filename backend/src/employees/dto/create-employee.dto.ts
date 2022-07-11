import { IsNotEmpty, IsOptional } from "class-validator";
import { Department } from "src/departments/entities/department.entity";

export class CreateEmployeeDto {
  @IsOptional()
  id: number;

  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsNotEmpty({ message: 'Birthdate is required' })
  birthDate: string;

  @IsNotEmpty({ message: 'CPF is required' })
  cpf: string;

  @IsNotEmpty({ message: 'RG is required' })
  rg: string;

  @IsNotEmpty({ message: 'Department is required' })
  department: Department;

  @IsNotEmpty({ message: 'Salary is required' })
  salary: number;

  @IsOptional()
  createdAt: Date;
}
