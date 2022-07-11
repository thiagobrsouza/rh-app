import {
  BadRequestException,
  ConflictException,
  Injectable
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private repository: Repository<Employee>,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    const exists = await this.repository.findOne({
      where: { cpf: createEmployeeDto.cpf },
    });
    if (exists) {
      throw new ConflictException('Employee already registered');
    }
    await this.repository.save(createEmployeeDto);
    return createEmployeeDto;
  }

  async findAll() {
    return await this.repository.find({
      order: { name: 'ASC' },
      relations: { department: true },
    });
  }

  async findOne(id: number) {
    const employee = await this.repository.findOne({
      where: { id },
      relations: { department: true },
    });
    return employee;
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    const employee = await this.repository.findOne({ where: { id } });
    const exists = await this.repository.findOne({
      where: { cpf: updateEmployeeDto.cpf },
    });
    if (exists && exists.id !== employee.id) {
      throw new ConflictException('Employee already registered');
    }
    this.repository.merge(employee, updateEmployeeDto);
    await this.repository.save(employee);
    return employee;
  }

  async remove(id: number) {
    try {
      await this.repository.delete(id);
    } catch {
      throw new BadRequestException('Object do not be deleted!');
    }
  }
}
