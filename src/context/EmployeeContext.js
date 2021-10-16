import { createContext, useEffect, useState } from "react";
import ReactNotifications from "../components/Notifications/ReactNotifications";
import Axios from '../api/api';
import useAuth from '../components/Auth/useAuth';

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState();
  const auth = useAuth();

  const GetEmployees = () => {
    useEffect(() => {
      const getEmployee = async () => {
        try {
          const res = await Axios(auth.user.access_token).get('/employees');
          setEmployees(res.data.data);
        } catch (err) {
          const resp = (err.response.data.message.errorInfo[2]) ? err.response.data.message.errorInfo[2] : 'Hubo un error interno'
          ReactNotifications(
            'Error',
            resp,
            'danger'
          );
        }
      };
      getEmployee();
    }, [])
  }
  
  const AddEmployee = async (params) => {
    try {
      const resp = await Axios(auth.user.access_token).post('/employees', params);
      setEmployees(employees.concat(resp.data.data));

      ReactNotifications(
        'Exito',
        `Empleado ${resp.data.data.name} creado correctamente`,
        'success'
      );
    } catch (err) {
      const resp = (err.response.data.message.errorInfo[2]) ? err.response.data.message.errorInfo[2] : 'Hubo un error interno'
      ReactNotifications(
        'Error',
        resp,
        'danger'
      );
    }
  }

  return (
    <EmployeeContext.Provider value={{ employees, AddEmployee, GetEmployees }}>
      {children}
    </EmployeeContext.Provider>
  );
}