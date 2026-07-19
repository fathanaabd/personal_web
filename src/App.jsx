import React from 'react';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="min-h-screen selection:bg-amber-200 text-sm relative">
      <main className="relative z-10 py-12 px-6 sm:px-12 md:px-20 max-w-3xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default App;