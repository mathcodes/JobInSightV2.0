import React from "react";
import Footer from "../components/Footer/Footer";
import WikiSearch from "../components/WikiSearch/index.js";
import FullRowHeader from "../components/FullRowHeader/index.js";
import Test from "../components/Test/index.js";
import YouTube from "../components/YouTube/index.js";
import Calendar from "../components/Calendar/index.js";
import FriendRefactor from "../components/Cards/index.js";

function Dashboard() {
  return (
    <div class="container-fluid">
      {/* -------- ROW FIRST-HEADER-------- */}
      <div className="row">
        <div className="col-sm colHeader Component">
          <FullRowHeader />
        </div>
      </div>
      {/* -------- ROW -------- */}
      <div className="row jumbotron">
        {/* -------- Calendar -------- */}
        <div className="col col-lg Component">
          <Calendar />
        </div>

        {/* -------- YOUTUBE -------- */}
        <div className="col col-lg Component">
          <YouTube />
        </div>
      </div>

      {/* -------- ROW -------- */}
      <div className="row">
        {/* -------- CARD -------- */}
        <div className="col col-lg Component imgComponent1">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title text-muted">Card title</h4>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text text-muted">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#B1" class="card-link">
                Card link
              </a>
              <a href="#D1" class="card-link">
                Another link
              </a>
            </div>
          </div>
        </div>
        
        {/* -------- WikiSearch -------- */}
        <div className="col col-sm Component">
          <WikiSearch />
        </div>
        {/* -------- Test -------- */}
        <div className="col col-sm Component">
          <Test />
        </div>
      </div>

      {/* -------- FriendRefactor -------- */}
      <div className="row">
        <div className="col col-sm Component">
        <FriendRefactor/>
        </div>
      </div>

      {/* -------- ROW -------- */}
      <div className="row">
        <div id="C1" className="col col-sm Component">
          C1
        </div>
        <div className="col-sm Component">C2</div>
        <div className="col-sm Component">C3</div>
        <div className="col-sm Component">C4</div>
      </div>

      {/* -------- ROW -------- */}
      <div className="row">
        <div id="D1" className="col-sm Component">
          D1
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Dashboard;
