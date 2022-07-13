import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Department } from "../../api/departments/Department";
import { useDepartmentService } from "../../api/departments/DepartmentService";
import { InputForm } from "../common/InputForm";
import { Card } from "../layout/Card";
import { Layout } from "../layout/Layout";

export const DepartmentForm = () => {

  const router = useRouter();
  const { id: queryId } = router.query;
  const service = useDepartmentService();
  const [department, setDepartment] = useState<Department>({
    name: ''
  });

  useEffect(() => {
    if (queryId) {
      service.getOne(queryId).then((data) => {
        setDepartment({ ...data });
      })
    }
  }, [queryId]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setDepartment({ ...department, [id]: value });
  }

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (department.id) {
      service.update(department);
    } else {
      service.create(department);
    }
  }

  return (
    <Layout>
      <Card title="Add or update a Department" xl="6" md="6" sm="8" xs="10">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="form-label">Name *</label>
          <InputForm type="text" id="name" value={department.name} onChange={handleInputChange} />
          <button type="submit" className="col-12 btn btn-primary mb-3">Submit</button>
          <Link href={'/departments'}>
            <button className="col-12 btn btn-info mb-3">To Departments</button>
          </Link>
        </form>
      </Card>
      <ToastContainer />
    </Layout>
  )
}