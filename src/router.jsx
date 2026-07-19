import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import About from './pages/About';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/about" replace />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  }
]);
