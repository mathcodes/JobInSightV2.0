import React from 'react';
import './App.css';
// import Login from './pages/Login'
import Dashboard from './pages/Dashboard';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App App-header">
      {/* FIX IMPORTS AND CHANGE BETWEEN 
      '<Login />'
        and 
      '<Dashboard>
      <NavBar/>
      </Dashboard>' to test before React Router is implemented*/}
      <Dashboard >
      <NavBar/>
      </Dashboard>
    </div>
  );
}

export default App;
