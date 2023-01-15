import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Main from './Components/Main';

function App() {
  return (
    <div className="bg-gray-400 flex flex-row justify-stretch">
      <Sidebar className="grow-0 flex-none w-1/3 m-3 p-6" />
      <Main className="grow w-2/3 m-3 overflow-hidden" />
    </div>
  );
}

export default App;
