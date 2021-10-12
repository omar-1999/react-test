import 'react-notifications-component/dist/theme.css'
import ReactNotification from 'react-notifications-component';
import AuthProvider from './components/Auth/AuthProvider';
import PublicsRoutes from './PublicsRoutes';

const App = () => {
  return (
    <>
      <ReactNotification />
      <AuthProvider>
        <PublicsRoutes />
      </AuthProvider>
    </>
  );
}

export default App;