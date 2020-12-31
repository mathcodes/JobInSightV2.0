import React from "react";
import Footer from "../components/Footer/Footer";
import WikiSearch from "../components/WikiSearch/index.js";
import Counter from "../components/Counter/index.js";
import FullRowHeader from "../components/FullRowHeader/index.js";
import Test from "../components/Test/index.js";
import YouTube from "../components/YouTube/index.js";
import Calendar from "../components/Calendar/index.js";
import FriendRefactor from "../components/Cards/index.js";
import Sidebar from "react-sidebar";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
      sidebar: (
        <div class="btn-group-vertical">
          <btn className="btnSideBar">Dashboard</btn>
          <btn className="btnSideBar">Calendar</btn>
          <btn className="btnSideBar">YouTube</btn>
          <btn className="btnSideBar">Wikipedia</btn>
          <btn className="btnSideBar">ToDo</btn>
          <btn className="btnSideBar">Goals</btn>
          <btn className="btnSideBar">Chat</btn>
          <btn className="btnSideBar">Documents</btn>
          <btn className="btnSideBar">Links</btn>
          <btn className="btnSideBar">Logout</btn>
          <btn className="btnSideBar"><button className="sideBarButton" onClick={() => this.onSetSidebarOpen(false)}>CLOSE
          </button></btn>
        </div>
      ),
      onSetSidebarOpen: false,
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <>
      <Sidebar
        sidebar={this.state.sidebar}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "#222"} }}
      >
        </Sidebar>
        <div class="container-fluid">
          {/* -------- ROW FIRST-HEADER-------- */}
          <div className="row"><button className="sideBarButton" onClick={() => this.onSetSidebarOpen(true)}>MENU
          </button>
            <div className="col col-sm colHeader Component">
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
            <div className="col col-lg Component">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title text-muted">Card title</h4>
                  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p class="card-text text-muted">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
              <FriendRefactor />
            </div>
          </div>

          {/* -------- ROW -------- */}
          <div className="row">
            <div id="C1" className="col col-sm Component">
              <WikiSearch />
            </div>
            <div className="col-sm Component">
              <Counter />
            </div>
            <div className="col-sm Component"></div>
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
</>      
    );
  }
}
export default Dashboard;
