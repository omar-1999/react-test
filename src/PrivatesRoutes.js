import { Switch } from 'react-router-dom';
import Error404 from './Route404';
import PrivateRoute from './components/Routes/PrivateRoute';
import TableEmployees from './components/Employees/TableEmployees';
import TableRequest from './components/Request/TableRequest';
import Dashboard from './pages/Dashboard/Dashboard';
import { EmployeeProvider } from './context/EmployeeContext';
import { RequestProvider } from './context/RequestContext';

const PrivatesRoutes = () => {
  return (
    <RequestProvider>
      <EmployeeProvider>
        <Switch>
          <PrivateRoute path="/" exact component={Dashboard} />
          <PrivateRoute path="/employees" exact component={TableEmployees} />
          <PrivateRoute path="/requests" exact component={TableRequest} />

          <Error404 />
        </Switch>
      </EmployeeProvider>
    </RequestProvider>
  );
}

export default PrivatesRoutes;