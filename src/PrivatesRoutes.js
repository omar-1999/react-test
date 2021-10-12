import {  Switch } from 'react-router-dom';
import PrivateRoute from './components/Routes/PrivateRoute';
import TableEmployees from './components/Employees/TableEmployees';
// import Drawer from './components/Menu/Drawer';
// import NotFound from './pages/NotFound';

const PrivatesRoutes = () => {
  return (
    <Switch>
      {/* <PrivateRoute path="/" exact component={Drawer} /> */}
      <PrivateRoute path="/employees" exact component={TableEmployees} />

      {/* <Route path="*">
        <Redirect to="/404" />
      </Route> */}
    </Switch>
  );
}

export default PrivatesRoutes;