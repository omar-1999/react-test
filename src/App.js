import 'react-notifications-component/dist/theme.css'
import AuthProvider from './components/Auth/AuthProvider';
import Routes from './Routes';

export default function App() {
  return (
    <>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
}