import { Department } from "../departments/Department";

export interface Employee {
  id?: any;
  name?: string;
  birthDate?: string;
  cpf?: string;
  rg?: string;
  salary?: string;
  department?: Department;
  createdAt?: string;
}