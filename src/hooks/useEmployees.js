import { useEffect, useState } from 'react';
import api from '../api/api';
import ReactNotifications from '../components/Notifications/ReactNotifications';

export const useGetEmployees = () => {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const getEmployees = async () => {
      try {
        const resp = await api.get('/employees');
        setEmployees(resp.data.data);
      } catch (err) {
        ReactNotifications(
          'Error',
          err.response.data.message.errorInfo[2],
          'danger'
        );
        // console.log(err.response.data.message.errorInfo[2])
        // console.log(err.response.status)
      }
    }
    getEmployees();
  }, [])

  return {
    employees
  }
}