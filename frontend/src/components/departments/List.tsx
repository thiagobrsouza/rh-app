import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useState } from 'react';
import { Department } from '../../api/departments/Department';
import http from '../../api/http';
import { ButtonDialog } from "../common/ButtonDialog";
import { Dialog } from "../common/Dialog";
import { Card } from "../layout/Card";
import { Layout } from "../layout/Layout";

export const DepartmentList = () => {

  const [departments, setDepartments] = useState<Department[]>([]);

  useEffect(() => {
    http.get('/departments').then(response => {
      setDepartments(response.data);
    })
  }, []);

  return (
    <Layout>
      <Card title="Department List">
        <ButtonDialog label="New Department" target="formDepartment"/>
        <Dialog title="Add or Update a Department" id="formDepartment">

        </Dialog>
        <DataTable value={departments} rowHover>
          <Column header="Code" field='id' />
          <Column header="Name" field='name' />
        </DataTable>
      </Card>
    </Layout>
  )
}