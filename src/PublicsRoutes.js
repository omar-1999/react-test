import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import NotFound from './pages/NotFound';
import Drawer from './components/Menu/Drawer';
// import PrivatesRoutes from './PrivatesRoutes';

const PublicsRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/login" exact component={Login} />
        <PublicRoute path="/register" exact component={Register} />
        <PrivateRoute path="/" component={Drawer} />
        <Route path="/404" component={NotFound} />
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default PublicsRoutes;