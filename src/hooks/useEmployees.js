import { useEffect, useState } from 'react';
import Axios from '../api/api';
import useAuth from '../components/Auth/useAuth';
import ReactNotifications from '../components/Notifications/ReactNotifications';

export const useGetEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const auth = useAuth();

  useEffect(() => {
    const getEmployees = async () => {
      try {
        const resp = await Axios(auth.user.access_token).get('/employees');
        setEmployees(resp.data.data);
      } catch (err) {
        ReactNotifications(
          'Error',
          err.response.data.message.errorInfo[2],
          'danger'
        );
      }
    };
    getEmployees();
  }, [auth])

  return {
    employees
  }
}