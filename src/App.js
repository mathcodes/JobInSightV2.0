import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import WikiSearch from "./components/WikiSearch/index.js";
// import WikiSignup from "./components/WikiSignup/index.js";
import Dashboard from "./pages/Dashboard";
// import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
