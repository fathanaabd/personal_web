import React from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
