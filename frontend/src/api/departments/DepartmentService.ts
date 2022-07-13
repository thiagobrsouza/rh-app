import { toast } from "react-toastify";
import http from "../http";
import { Department } from "./Department";

export const useDepartmentService = () => {

  let errorsValidation = [];
  let statusError = null;

  const create = async (department: Department) => {
    await http.post('/departments', department).then(response => {
      toast.success('Successfully!');
    }).catch((error: any) => {
      errorsValidation = error.response.data.message;
      statusError = error.response.status;
      switch (statusError) {
        case 409:
          toast.error(error.response.data.message);
          break;
        case 400:
          errorsValidation.map((msg: any) => (
            toast.error(msg)
          ));
          break;
      }
    });
  }

  const getOne = async (id: any) => {
    const response = await http.get(`/departments/${id}`);
    return response.data;
  }

  const update = async (department: Department) => {
    http.patch(`/departments/${department.id}`, department).then(response => {
      toast.success('Sucessfully!');
    }).catch((error: any) => {
      errorsValidation = error.response.data.message;
      statusError = error.response.status;
      switch (statusError) {
        case 409:
          toast.error(error.response.data.message);
          break;
        case 400:
          errorsValidation.map((msg: any) => (
            toast.error(msg)
          ));
          break;
      }
    });
  }

  const deleteOne = async (id: any) => {
    const response = await http.delete(`/departments/${id}`);
    return response;
  }

  return {
    create,
    getOne,
    update,
    deleteOne
  }

}