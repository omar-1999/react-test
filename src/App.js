import React from 'react';
import Drawer from './components/Menu/Drawer';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'

export default function App() {
  return (
    <>
      <ReactNotification />
      <Drawer />
    </>
  );
}