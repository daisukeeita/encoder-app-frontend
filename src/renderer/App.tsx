import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import SearchVehicle from './components/SearchVehicle';
import VehicleDetails from './components/VehicleDetails';

const App = () => {
  return (
    <>
      <h1 className='font-sans font-bold mt-3 ml-3 mb-5'>ENCODE VEHICLE</h1>
      <div className='font-sans'>
        <SearchVehicle />
        <VehicleDetails />
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
