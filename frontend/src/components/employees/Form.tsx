import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Department } from "../../api/departments/Department";
import { Employee } from "../../api/employees/Employee";
import { useEmployeeService } from "../../api/employees/EmployeeService";
import http from "../../api/http";
import { converterToDecimal, currencyMask } from "../../utils/formatPrice";
import { InputForm } from "../common/InputForm";
import { SelectForm } from "../common/SelectForm";
import { Card } from "../layout/Card";
import { Layout } from "../layout/Layout";

export const EmployeeForm = () => {

  const router = useRouter();
  const { id: queryId } = router.query;
  const service = useEmployeeService();
  const [employee, setEmployee] = useState<Employee>({
    name: '', cpf: '', rg: '', birthDate: '', department: {}, salary: ''
  });
  const [departments, setDepartments] = useState<Department[]>([]);

  useEffect(() => {
    http.get('/departments').then(response => {
      setDepartments(response.data);
    })
  }, []);

  useEffect(() => {
    if (queryId) {
      service.getOne(queryId).then((data) => {
        setEmployee({ ...data });
      })
    }
  }, [queryId]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setEmployee({ ...employee, [id]: value });
  }

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (employee.id) {
      service.update({...employee, salary: converterToDecimal(employee.salary)});
    } else {
      service.create({...employee, salary: converterToDecimal(employee.salary)});
    }
  }

  return (
    <Layout>
      <Card title="Add or update a Employee" xl="6" md="6" sm="8" xs="10">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="form-label">Name *</label>
          <InputForm type="text" id="name" value={employee.name} onChange={handleInputChange} />
          <label htmlFor="rg" className="form-label">RG</label>
          <InputForm type="text" id="rg" value={employee.rg} onChange={handleInputChange} />
          <label htmlFor="cpf" className="form-label">CPF *</label>
          <InputForm type="text" id="cpf" value={employee.cpf} onChange={handleInputChange} />
          <label htmlFor="birthDate" className="form-label">Birth Date *</label>
          <InputForm type="date" id="birthDate" value={employee.birthDate} onChange={handleInputChange} />
          <label htmlFor="salary" className="form-label">Salary *</label>
          <InputForm type="text" id="salary" value={currencyMask(employee.salary)} onChange={handleInputChange} />
          <label htmlFor="department" className="form-label">Department *</label>
          <SelectForm id="department" value={employee.department?.id} onChange={handleInputChange}>
            <option>Select and department</option>
            {
              departments.map((department: Department) => (
                <option key={department.id} value={department.id}>{department.name}</option>
              ))
            }
          </SelectForm>
          {
            employee.id ?
              <>
                <label htmlFor="createdAt" className="form-label">Created At</label>
                <InputForm value={employee.createdAt} readOnly />
              </> : null
          }
          <button type="submit" className="col-12 btn btn-primary mb-3">Submit</button>
          <Link href={'/employees'}>
            <button className="col-12 btn btn-info mb-3">To Employees</button>
          </Link>
        </form>
      </Card>
      <ToastContainer />
    </Layout>
  )
}