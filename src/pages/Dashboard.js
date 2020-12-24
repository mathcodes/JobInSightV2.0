import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function Dashboard() {
  return (
    <div class="container">
      <NavBar />
      {/* -------- ROW -------- */}
      <div className="row">
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal3"
        >
          Launch demo modal
        </button>
        </div>

        {/* -------- ROW -------- */}
        <div className="row">
          <div className="shadow col col-md-3">
            <div className="d-flex p-2 bd-highlight Component Component4">
              Component4.b
            </div>
            </div></div>
        
        {/* -------- ROW -------- */}
        <div className="row">
          <div className="col-md-2 Component">B1</div>
          <div className="col-md-2 Component">B2</div>
          <div className="col-md-8 Component">B3</div>
        </div>

        <Footer />
        </div>
  
       
)
  }
export default Dashboard;
