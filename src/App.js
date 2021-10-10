import React from 'react';
import Drawer from './components/Menu/Drawer';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

export default function App() {
  return (
    <>
      <ReactNotification />
      <BrowserRouter>
        <Route path="/" exact component={Drawer} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </BrowserRouter>
    </>
  );
}