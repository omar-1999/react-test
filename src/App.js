import React from 'react';
import BasicTabs from './components/Header/BasicTabs';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'

export default function App() {
  return (
    <>
      <ReactNotification />
      <BasicTabs />
    </>
  );
}