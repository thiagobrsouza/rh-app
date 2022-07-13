import { toast } from "react-toastify";
import http from "../http";
import { Employee } from "./Employee";

export const useEmployeeService = () => {

  let errorsValidation = [];
  let statusError = null;

  const create = async (employee: Employee) => {
    await http.post('/employees', employee).then(response => {
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
    const response = await http.get(`/employees/${id}`);
    return response.data;
  }

  const update = async (employee: Employee) => {
    http.patch(`/employees/${employee.id}`, employee).then(response => {
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
    const response = await http.delete(`/employees/${id}`);
    return response;
  }

  return {
    create,
    getOne,
    update,
    deleteOne
  }

}