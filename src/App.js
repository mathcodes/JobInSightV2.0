import React from 'react';
import './App.css';
// import Login from './pages/Login'
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App App-header">
        <NavBar />
        <Wrapper>
        <Dashboard />
          <Route exact path="/" component={Search} />
         {/* <Route exact path="/#B1" component={B1} />*/}
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
