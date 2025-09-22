import React from 'react';
import {createRoot} from 'react-dom/client';

const App = () => {
  return (
    <div>
      <h1>Hello from Electron and React! 👋🏼</h1>
      <p>This is a desktop application built with web technologies.</p>
    </div>
  )
}

const rootElement : HTMLElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}

export default App;