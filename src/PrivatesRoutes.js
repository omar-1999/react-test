import { Switch } from 'react-router-dom';
import PrivateRoute from './components/Routes/PrivateRoute';
import TableEmployees from './components/Employees/TableEmployees';
import Dashboard from './pages/Dashboard/Dashboard';
// import NotFound from './pages/NotFound';

const PrivatesRoutes = () => {
  return (
    <Switch>
      <PrivateRoute path="/" exact component={Dashboard} />
      <PrivateRoute path="/employees" exact component={TableEmployees} />

      {/* <Route path="*">
        <Redirect to="/404" />
      </Route> */}
    </Switch>
  );
}

export default PrivatesRoutes;