import React from 'react';
import Sidebar from './components/sidebar';
import Dashboard from './components/dashboard';

import './App.css';
import "font-awesome/css/font-awesome.min.css"

function App() {
  return (
    <div className="dashboard">

      <Sidebar />
      <Dashboard />

    </div>
  );
}

export default App;
