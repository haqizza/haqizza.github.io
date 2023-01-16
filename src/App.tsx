import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Main from './Components/Main';

function App() {
  return (
    <div className="bg-gray-400 flex flex-row flex-wrap md:flex-nowrap justify-stretch">
      <Sidebar className="grow-0 md:flex-none md:w-1/3 w-full m-3" />
      <Main className="grow md:w-2/3 w-full m-3 overflow-hidden" />
    </div>
  );
}

export default App;
