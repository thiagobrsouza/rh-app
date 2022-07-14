import Link from "next/link";
import Router from "next/router";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { confirmDialog, ConfirmDialog } from "primereact/confirmdialog";
import { DataTable } from "primereact/datatable";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Employee } from "../../api/employees/Employee";
import { useEmployeeService } from "../../api/employees/EmployeeService";
import http from "../../api/http";
import { Card } from "../layout/Card";
import { Layout } from "../layout/Layout";

export const EmployeeList = () => {

  const service = useEmployeeService();
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    http.get('/employees').then(response => {
      setEmployees(response.data);
    })
  }, []);

  const selectEmployee = (employee: Employee) => {
    const url = `/employees/add?id=${employee.id}`;
    Router.push(url);
  }

  const deleteOne = (employee: Employee) => {
    confirmDialog({
      message: 'Are you sure to delete this object?',
      header: 'Confirm action',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Yes',
      rejectLabel: 'No',
      accept: () => {
        service.deleteOne(employee.id).then((response) => {
          toast.success('Employee deleted!');
          const changeTable = employees.filter(c => c.id !== employee.id);
          setEmployees(changeTable);
        }).catch((error: any) => {
          toast.error(error.response.data.message);
        });
      },
      reject: () => {
        toast.warning('Action canceled!')
      }
    });
  }

  const actions = (employee: Employee) => {
    return (
      <div>
        <Button icon="pi pi-pencil" className="ms-2 p-button-rounded" onClick={e => selectEmployee(employee)} />
        <Button icon="pi pi-trash" className="ms-2 p-button-rounded p-button-danger" onClick={e => deleteOne(employee)} />
      </div>
    );
  }

  return (
    <Layout>
      <Card title="Employees List" xl="10" md="10" sm="10" xs="10">
        <Link href={'/employees/add'}>
          <button className="btn btn-primary mb-3">New Employee</button>
        </Link>
        <DataTable value={employees} rowHover paginator rows={5} rowsPerPageOptions={[5, 10, 15]}>
          <Column header="Code" field='id' sortable />
          <Column header="Name" field='name' sortable />
          <Column header="CPF" field='cpf' />
          <Column header="Department" field='department.name' sortable />
          <Column header="Actions" body={actions} />
        </DataTable>
        <ConfirmDialog />
        <ToastContainer />
      </Card>
    </Layout>
  )
}