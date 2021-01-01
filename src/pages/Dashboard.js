import React from "react";
import Footer from "../components/Footer/Footer";
import WikiSearch from "../components/WikiSearch/index.js";
import Counter from "../components/Counter/index.js";
import FullRowHeader from "../components/FullRowHeader/index.js";
// import Test from "../components/Test/index.js";
import YouTube from "../components/YouTube/index.js";
import Calendar from "../components/Calendar/index.js";
import FriendRefactor from "../components/Cards/index.js";
import DropDown from "../components/DropDown/index.js";
import Card from "../components/Card/index.js";
import Form from "../components/Form/index.js";
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
          <btn className="btnSideBar">
            <button
              className="sideBarButtonClose"
              onClick={() => this.onSetSidebarOpen(false)}
            >
              CLOSE
            </button>
          </btn>
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
      <div className="container-fluid">
        <Sidebar
          className="sideBarClass"
          sidebar={this.state.sidebar}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: "#222", position: "absolute"} }}
        ><button id="sidebar-toggle" 
        className="fixed-top sideBarButton"
        onClick={() => this.onSetSidebarOpen(true)}
      >
        MENU
      </button></Sidebar>

        {/* -------- ROW FIRST-HEADER-------- */}
        <div className="row">
          
          <div className="col col-sm colHeader Component">
            <FullRowHeader />
          </div>
        </div>
        {/* -------- ROW Rest of Them-------- */}
        <div className="row justify-content-md-center row-cols-1 row-cols-sm-4 row-cols-md-4">
          {/* -------- Calendar -------- */}
          <div className="col Component">
            <Calendar />
          </div>
          {/* -------- WikiSearch ------ */}
          <div className="col Component">
            <WikiSearch />
          </div>
          {/* ---------- Form ---------- */}
          <div className="col Component">
            <Form />
          </div>
          {/* --------  YOUTUBE -------- */}
          <div className="col Component">
            <YouTube />
          </div>
          {/* ----------  CARD  -------- */}
          <div className="col Component">
            <Card />
          </div>
          {/* ------  WikiSearch  ------ */}
          <div className="col col-sm Component">
            <WikiSearch />
          </div>
          {/*  ---- FriendRefactor ----  */}
          <div className="col col-sm Component">
            <FriendRefactor />
          </div>
          {/* -------- DropDown -------- */}
          <div id="C1" className="col col-sm Component">
            <DropDown />
          </div>
          {/* -------- Counter -------- */}
          <div className="col-sm Component">
            <Counter />
          </div>
          {/* -------- FILLER -------- */}
          <div className="col-sm Component">FILLER</div>
          {/* -------- FILLER -------- */}
          <div className="col-sm Component">FILLER</div>
        </div>

        <Footer />
      </div>
    );
  }
}
export default Dashboard;
