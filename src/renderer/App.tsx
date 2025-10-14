import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { SelectTabContextProvider } from './contexts/SelectTabContext';
import { AuthenticationContextProvider } from './contexts/AuthenticationContext';
import { HashRouter } from 'react-router';
import { AppRoutes } from './components/Routes/AppRoutes';


const App = () => {

  return (
    <>
      <AuthenticationContextProvider>
        <HashRouter>
          <SelectTabContextProvider>
            <AppRoutes /> 
          </SelectTabContextProvider>
        </HashRouter>
      </AuthenticationContextProvider>
    </>
  );
};

const rootElement : HTMLElement = document.getElementById( 'root' );

if ( rootElement ) {
  const root = createRoot( rootElement );
  root.render( <App /> );
}

export default App;