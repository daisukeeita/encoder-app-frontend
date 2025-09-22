import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import SearchVehicle from './components/SearchVehicle';

const App = () => {
  return (
    <div>
      <h1 className='font-bold underline text-red-700'>Hello from Electron and React! 👋🏼</h1>
      <p>This is a desktop application built with web technologies.</p>
      <SearchVehicle />
    </div>
  )
}

const rootElement : HTMLElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}

export default App;