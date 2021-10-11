import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Drawer from './components/Menu/Drawer';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import NotFound from './pages/NotFound';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <PublicRoute path="/login" exact component={Login} />
                <PublicRoute path="/register" exact component={Register} />
                <PrivateRoute path="/" exact component={Drawer} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;