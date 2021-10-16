import { createContext, useEffect, useState } from "react";
import ReactNotifications from "../components/Notifications/ReactNotifications";
import Axios from '../api/api';
import useAuth from '../components/Auth/useAuth';

export const RequestContext = createContext();

export const RequestProvider = ({ children }) => {
  const [request, setRequest] = useState();
  const auth = useAuth();

  const GetRequest = () => {
    useEffect(() => {
      const getResquests = async () => {
        try {
          const res = await Axios(auth.user.access_token).get('/requests');
          setRequest(res.data.data);
        } catch (err) {
          const resp = (err.response.data.message.errorInfo[2]) ? err.response.data.message.errorInfo[2] : 'Hubo un error interno'
          ReactNotifications(
            'Error',
            resp,
            'danger'
          );
        }
      };
      getResquests();
    }, [])
  }
  
  const AddRequest = async (params) => {
    try {
      const resp = await Axios(auth.user.access_token).post('/requests', params);
      setRequest(request.concat(resp.data.data));

      ReactNotifications(
        'Exito',
        `Request ${resp.data.data.description} creado correctamente`,
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
    <RequestContext.Provider value={{ request, AddRequest, GetRequest }}>
      {children}
    </RequestContext.Provider>
  );
}