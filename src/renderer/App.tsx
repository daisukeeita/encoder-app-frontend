import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import SearchVehicle from './components/SearchVehicle';

const App = () => {
  return (
    <>
      <h1 className='font-sans font-bold mt-3 ml-3 mb-5'>ENCODE VEHICLE</h1>
      <div className='mx-auto w-5/6'>
        <div className='font-sans'>
          <SearchVehicle />
        </div>
      </div>
    </>
  );
};

const rootElement : HTMLElement = document.getElementById( 'root' );

if ( rootElement ) {
  const root = createRoot( rootElement );
  root.render( <App /> );
}

export default App;
