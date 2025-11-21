import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/UserProvider';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;