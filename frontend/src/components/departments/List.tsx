import Link from 'next/link';
import Router from "next/router";
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { DataTable } from 'primereact/datatable';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Department } from '../../api/departments/Department';
import http from '../../api/http';
import { Card } from "../layout/Card";
import { Layout } from "../layout/Layout";


export const DepartmentList = () => {

  const [departments, setDepartments] = useState<Department[]>([]);

  useEffect(() => {
    http.get('/departments').then(response => {
      setDepartments(response.data);
    })
  }, []);

  const selectDepartment = (department: Department) => {
    const url = `/departments/add?id=${department.id}`;
    Router.push(url);
  }

  const deleteOne = (department: Department) => {
    confirmDialog({
      message: 'Tem certeza que deseja remover o item selecionado?',
      header: 'Confirme a ação',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        service.deleteOne(department.id).then((response) => {
          toast.success('Cliente removido com sucesso!');
          const changeTable = departments.filter(c => c.id !== department.id);
          setDepartments(changeTable);
        }).catch((error: any) => {
          toast.error(error.response.data.message);
        });
      },
      reject: () => {
        toast.warning('Ação cancelada!')
      }
    });
  }

  const actions = (department: Department) => {
    return (
      <div>
        <Button icon="pi pi-pencil" className="ms-2 p-button-rounded" onClick={e => selectDepartment(department)} />
        <Button icon="pi pi-trash" className="ms-2 p-button-rounded p-button-danger" onClick={e => deleteOne(department)} />
      </div>
    );
  }

  return (
    <Layout>
      <Card title="Department List" xl="10" md="10" sm="10" xs="10">
        <Link href={'/departments/add'}>
          <button className="btn btn-primary mb-3">New Department</button>
        </Link>
        <DataTable value={departments} rowHover>
          <Column header="Code" field='id' />
          <Column header="Name" field='name' />
          <Column header="Actions" body={actions} />
        </DataTable>
        <ConfirmDialog />
        <ToastContainer />
      </Card>
    </Layout>
  )
}