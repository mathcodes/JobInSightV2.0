import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function Dashboard() {
  return (
		<div className="container-fluid">
		<div class="container">
      <NavBar />
      {/* -------- ROW -------- */}
			<div className="row">
			<div className="shadow col col-md-6">
			<div className="d-flex p-2 bd-highlight Component Component1">
            Component1
          </div>
        </div>
        <div className="shadow col col-md-3">
          <div className="d-flex p-2 bd-highlight Component Component2">
            Component2
          </div>
        </div>

        <div className="shadow col col-md-3">
          <div className="d-flex p-2 bd-highlight Component Component3">
            Component3
          </div>
        </div>
			</div>
			{/* -------- ROW -------- */}
      <div className="row">
			<div className="shadow col col-md-3">
			<div className="d-flex p-2 bd-highlight Component Component4">
            Component4.a
          </div>
       
        </div>
        <div className="shadow col col-md-9">
          <div className="d-flex p-2 bd-highlight Component Component6">
            Component6.a
          </div>
        </div>
      </div>
					 {/* -------- ROW -------- */}
					  <div className="row">
        <div className="shadow col col-md-3">
          <div className="d-flex p-2 bd-highlight Component Component4">
            Component4.b
          </div>
        </div>
        <div className="shadow col col-md-3">
          <div className="d-flex p-2 bd-highlight Component Component1">
            Component5.b
          </div>
        </div>
        <div className="shadow col col-md-3">
          <div className="d-flex p-2 bd-highlight Component Component2">
            Component6.b
          </div>
        </div>
        <div className="shadow col col-md-3">
          <div className="d-flex p-2 bd-highlight Component Component3">
            Component6.c
          </div>
        </div>
      </div>
			{/* -------- ROW -------- */}
      <div className="row">
        <div className="shadow col-9">
          <div className="d-flex p-2 bd-highlight Component Component1">
            Component4.c
          </div>
        </div>

       
          <div className="shadow col-3 Nav.header d-flex p-2 bd-highlight Component Component2">
            Component6.d
         
        </div>
			</div>
			
						{/* -------- ROW -------- */}
  <div class="row">
    <div class="col-md-2 Component">
      B1
    </div>
    <div class="col-md-2 Component">B2
    </div>
    <div class="col-md-8 Component">B3
    </div>
  </div>
</div>


      <Footer />
    </div>
  );
}

export default Dashboard;
