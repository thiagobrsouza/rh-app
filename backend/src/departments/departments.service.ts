import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department } from './entities/department.entity';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(Department)
    private repository: Repository<Department>,
  ) {}

  async create(createDepartmentDto: CreateDepartmentDto) {
    const exists = await this.repository.findOne({
      where: { name: createDepartmentDto.name },
    });
    if (exists) {
      throw new ConflictException('Department already registered');
    }
    await this.repository.save(createDepartmentDto);
    return createDepartmentDto;
  }

  async findAll() {
    return await this.repository.find({ order: { name: 'ASC' } });
  }

  async findOne(id: number) {
    const department = await this.repository.findOne({ where: { id } });
    return department;
  }

  async update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    const department = await this.repository.findOne({ where: { id } });
    const exists = await this.repository.findOne({
      where: { name: updateDepartmentDto.name },
    });
    if (exists && exists.id !== department.id) {
      throw new ConflictException('Department already registered');
    }
    this.repository.merge(department, updateDepartmentDto);
    await this.repository.save(department);
    return department;
  }

  async remove(id: number) {
    try {
      await this.repository.delete(id);
    } catch {
      throw new BadRequestException('Object do not be deleted!');
    }
  }
}
