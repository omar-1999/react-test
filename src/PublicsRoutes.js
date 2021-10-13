import { BrowserRouter, Switch } from 'react-router-dom';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Drawer from './components/Menu/Drawer';
import Error404 from './Route404';

const PublicsRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/login" exact component={Login} />
        <PublicRoute path="/register" exact component={Register} />
        <PrivateRoute path="/" component={Drawer} />
        
        <Error404 />
      </Switch>
    </BrowserRouter>
  );
}

export default PublicsRoutes;