import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateDepartmentDto {
  @IsOptional()
  id: number;

  @IsNotEmpty({ message: 'Nome é obrigatório' })
  name: string;

  @IsOptional()
  createdAt: Date;
}
