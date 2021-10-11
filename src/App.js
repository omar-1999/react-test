import 'react-notifications-component/dist/theme.css'
import ReactNotification from 'react-notifications-component';
import AuthProvider from './components/Auth/AuthProvider';
import Routes from './Routes';

const App = () => {
  return (
    <>
      <ReactNotification />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
}

export default App;