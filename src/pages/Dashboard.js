import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar/index.js";

function Dashboard() {
  return (
    <div class="container-fluid">
      <NavBar />
      {/* -------- ROW -------- */}
      <div className="row jumbotron">
        <div className="col-sm Component ComponentYT">
        <header className="Header">User Name</header>

             </div>
             <div className="col-sm Component Component2 imgComponent1">
        <img className="" title="colors" href="../images/HBcolors.png"/>

             </div>
             <div className="col-sm Component inputComponent">
        <header className="Header">User Name</header>

             </div>
      </div>

      {/* -------- ROW -------- */}
      <div className="row">
        <div className="col-sm Component ComponentYT align-content-center">
        <iframe width="560" height="315" title="mathcodesProjects" src="https://www.youtube.com/embed/videoseries?list=PLBrVt1MNs5px1DyLj2xtz3YFZyJF0ZlvO" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
        <div className="col-sm Component">A3</div>
      </div>

      {/* -------- ROW -------- */}
      <div className="row">
        <div id="B1" className="col-lg Component Component2">B1</div>
        <div className="col-lg Component Component2">B2</div>
        <div className="col-lg Component Component2">B3</div>
      </div>

      {/* -------- ROW -------- */}
      <div className="row">
        <div id="C1" className="col-sm Component">C1</div>
        <div className="col-sm Component">C2</div>
        <div className="col-sm Component">C3</div>
        <div className="col-sm Component">C4</div>
      </div>

      {/* -------- ROW -------- */}
      <div className="row">
        <div id="D1" className="col-sm Component">D1</div>
      </div>

    
      <Footer />
    </div>
  );
}

export default Dashboard;
