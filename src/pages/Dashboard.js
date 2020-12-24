import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function Dashboard() {
  return (
    <div class="container-fluid">
      <NavBar />
      {/* -------- ROW -------- */}
      <div className="row">
      <div className="col-sm Component">A2</div>
        </div>

        {/* -------- ROW -------- */}
        <div className="row">
        <div className="col-sm Component">A2</div>
        <div className="col-sm Component">A3</div>
      </div>

        
        {/* -------- ROW -------- */}
        <div className="row">
          <div className="col-lg Component Component2">B1</div>
          <div className="col-lg Component Component2">B2</div>
          <div className="col-lg Component Component2">B3</div>
        </div>

         {/* -------- ROW -------- */}
         <div className="row">
         <div className="col-sm Component">B1</div>
         <div className="col-sm Component">B2</div>
         <div className="col-sm Component">B3</div>
         <div className="col-sm Component">B4</div>
       </div>

       {/* -------- ROW -------- */}
       <div className="row">
       <div className="col-sm Component">
       
       </div>
     </div>

     {/* -------- ROW -------- */}
     <div className="row rowB">
     <div className="col col-sm Component Component1">B1</div>
     <div className="col col-sm Component Component1"><div class="media">
     <img src="../images/HBcolorsSM-xs.png" class="align-self-center mr-3" alt="OOO"/>
     <div class="media-body">
       <h5 class="mt-0">Center-aligned media</h5>
       <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
       <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
     </div>
     </div>
     </div>
     </div>
    

  <Footer />
  </div>
  )}

export default Dashboard;
