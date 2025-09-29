import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import SearchVehicle from './components/SearchVehicle';
import {VehicleDetailsContextProvider} from './contexts/VehicleDetailsContext';
import VehicleDetails from './components/VehicleDetails';

const App = () => {
  return (
    <>
      <VehicleDetailsContextProvider>
        <h1 className='font-sans font-bold mt-3 ml-3 mb-5'>ENCODE VEHICLE</h1>
        <div className='mx-auto w-5/6'>
          <div className='font-sans'>
            <SearchVehicle />
            <VehicleDetails />
          </div>
        </div>
      </VehicleDetailsContextProvider>
    </>
  );
};

const rootElement : HTMLElement = document.getElementById( 'root' );

if ( rootElement ) {
  const root = createRoot( rootElement );
  root.render( <App /> );
}

export default App;