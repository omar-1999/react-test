import { Route, Redirect } from 'react-router-dom';
import NotFound from './pages/NotFound';

const Error404 = () => {
  return (
    <>
      <Route path="/404" component={NotFound} />
      <Route path="*">
        <Redirect to="/404" />
      </Route>
    </>
  );
}

export default Error404;