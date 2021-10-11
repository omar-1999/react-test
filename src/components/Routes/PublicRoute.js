import { Route, Redirect } from 'react-router-dom';
import useAuth from '../Auth/useAuth';

const PublicRoute = ({ component: Component, ...rest }) => {
    const auth = useAuth();

    return (
        <Route {...rest}>
            {!auth.isLogged() ? (
                <Component />
            ) : (
                <Redirect to="/" />
            )}
        </Route>
    );
}

export default PublicRoute;