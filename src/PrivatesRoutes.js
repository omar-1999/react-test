import { Switch } from 'react-router-dom';
import Error404 from './Route404';
import PrivateRoute from './components/Routes/PrivateRoute';
import TableEmployees from './components/Employees/TableEmployees';
import Dashboard from './pages/Dashboard/Dashboard';

const PrivatesRoutes = () => {
  return (
    <Switch>
      <PrivateRoute path="/" exact component={Dashboard} />
      <PrivateRoute path="/employees" exact component={TableEmployees} />

      <Error404 />
    </Switch>
  );
}

export default PrivatesRoutes;