import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { ButtonDialog } from "../common/ButtonDialog";
import { Dialog } from "../common/Dialog";
import { Card } from "../layout/Card";
import { Layout } from "../layout/Layout";

export const DepartmentList = () => {
  return (
    <Layout>
      <Card title="Department List">
        <ButtonDialog label="New Department" target="formDepartment"/>
        <Dialog title="Add or Update a Department" id="formDepartment">

        </Dialog>
        <DataTable>
          <Column header="Code" />
          <Column header="Name" />
        </DataTable>
      </Card>
    </Layout>
  )
}