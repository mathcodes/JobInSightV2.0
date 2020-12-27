import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar/index.js";

function Dashboard() {
  return (
    <div class="container-fluid">
      <NavBar />
       {/* -------- ROW FIRST-HEADER-------- */}
       <div className="row">
       <div className="col-sm Component inputComponent">
        <header className="Header mainHeader">
          <h6>User Name: </h6><h1>John Doe</h1>
          <h6>Location: </h6><h4>Carrboro, NC </h4>
        </header>
       </div>

</div>
      {/* -------- ROW -------- */}
      <div className="row jumbotron">
      <div className="col-sm Component ComponentYT align-content-center">
      <iframe width="560" height="315" title="mathcodesProjects" src="https://www.youtube.com/embed/videoseries?list=PLBrVt1MNs5px1DyLj2xtz3YFZyJF0ZlvO" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
             <div className="col-sm Component imgComponent1">
             <div class="card">
             <div class="card-body">
               <h4 class="card-title">Card title</h4>
               <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
               <p class="card-text text-muted">
                 Some quick example text to build on the card title
                 and make up the bulk of the card's content.
               </p>
               <a href="#B1" class="card-link">Card link</a>
               <a href="#D1" class="card-link">Another link</a>
             </div>
           </div>

             </div>

     


      {/* -------- ROW -------- */}
      <div className="row">
        
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
      </div>  </div>
  );
}

export default Dashboard;
