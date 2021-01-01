import React from "react";
import Footer from "../components/Footer/Footer";
// import WikiSearch from "../components/WikiSearch/index.js";
import Counter from "../components/Counter/index.js";
import FullRowHeader from "../components/FullRowHeader/index.js";
// import Test from "../components/Test/index.js";
import YouTube from "../components/YouTube/index.js";
import Calendar from "../components/Calendar/index.js";
import FriendRefactor from "../components/Cards/index.js";
import OmdbContainer from "../components/OmdbContainer/index.js";
import GifSearchResultContainer from "../components/GifSearchResultContainer/index.js";
// import ContextComponent from "../components/ContextComponent/index.js";
import DropDown from "../components/DropDown/index.js";
// import Card from "../components/Card/index.js";
import Form from "../components/Form/index.js";
import Sidebar from "react-sidebar";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
      sidebar: (
        <div className="btn-group-vertical SBstyles">
          <btn
            className="btnSideBar"
            onClick={() => this.onSetSidebarOpen(false)}
          >
            Close
          </btn>
          <a href="#Dashboard" className="btnSideBar">
            <btn className="btnSideBar">Dashboard</btn>
          </a>
          <a href="#Calendar" className="btnSideBar">
            <btn className="btnSideBar">Calendar</btn>
          </a>
          <a href="#YouTube" className="btnSideBar">
            <btn className="btnSideBar">YouTube</btn>
          </a>
          <a href="#Wikipedia" className="btnSideBar">
            <btn className="btnSideBar">Wikipedia</btn>
          </a>
          <a href="#Form" className="btnSideBar">
            <btn className="btnSideBar">Form</btn>
          </a>
          <a href="#ToDo" className="btnSideBar">
            <btn className="btnSideBar">ToDo</btn>
          </a>
          <a href="#Goals" className="btnSideBar">
            <btn className="btnSideBar">Goals</btn>
          </a>
          <a href="#Omdb" className="btnSideBar">
            <btn className="btnSideBar">Omdb</btn>
          </a>
          <a href="#Chat" className="btnSideBar">
            <btn className="btnSideBar">Chat</btn>
          </a>
          <a href="#Documents" className="btnSideBar">
            <btn className="btnSideBar">Documents</btn>
          </a>
          <a href="#Links" className="btnSideBar">
            <btn className="btnSideBar">Links</btn>
          </a>
          <a href="#Logout" className="btnSideBar">
            <btn className="btnSideBar">Logout</btn>
          </a>
          <btn
            className="btnSideBar"
            onClick={() => this.onSetSidebarOpen(false)}
          >
            Close
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
          styles={{ sidebar: { background: "#222", position: "absolute" } }}
        >
          <button
            id="sidebar-toggle"
            className="fixed-top sideBarButton"
            onClick={() => this.onSetSidebarOpen(true)}
          >
            MENU
          </button>
        </Sidebar>

        {/* -------- ROW FIRST-HEADER-------- */}
        <div className="row">
          <div id="FullRowHeader" className="col col-sm colHeader">
            <FullRowHeader />
          </div>
        </div>
        {/* -------- ROW Rest of Them-------- */}
        <div className="row g-2 g-lg-3 justify-content-md-center row-cols-1 row-cols-sm-4 row-cols-md-4">
          {/* -------- Calendar -------- */}
          <div id="Calendar" className="col Component">
            <Calendar />
          </div>
          {/* -------- ContextComponent ------ 
          <div id="ContextComponent" className="col Component">
            <ContextComponent />
          </div>*/}
          {/* ---------- Form ----------*/}
          <div id="Form" className="col Component">
            <Form />
          </div>
          {/* ---------- Chat ----------*/}
          <div id="Form" className="col Component">
            Chat Component
          </div>
          {/* ---------- Form ----------*/}
          <div id="Goals" className="col Component">
            Goals Component
          </div>
          {/* ---------- Form ----------*/}
          <div id="ToDo" className="col Component">
            ToDo Component
          </div>
          {/* ---------- Form ----------*/}
          <div id="Form" className="col Component">
            <Form />
          </div>
          {/* ---------- GifSearchResultContainer ----------*/}
          <div id="GifSearchResultContainer" className="col Component">
            <GifSearchResultContainer />
          </div>
          {/* --------  YOUTUBE -------- */}
          <div id="YouTube" className="col Component">
            <YouTube />
          </div>
          {/* ----------  CARD  -------- 
          <div id="Card" className="col Component">
            <Card />
          </div>*/}
          {/* ------  WikiSearch  ------ 
          <div id="WikiSearch" className="col col-sm Component">
            <WikiSearch />
          </div>*/}
          {/*  ---- FriendRefactor ----  */}
          <div id="FriendRefactor" className="col col-sm Component">
            <FriendRefactor />
          </div>
          {/* -------- DropDown -------- */}
          <div id="DropDown" className="col col-sm Component">
            <DropDown />
          </div>
          {/* -------- Counter --------*/}
          <div id="Counter" className="col-sm Component">
            <Counter />
          </div>
          {/* -------- Documents -------- */}
          <div id="Documents" className="col-sm Component">
            Documents Component
          </div>
          {/* -------- Links -------- */}
          <div id="Links" className="col-sm Component">
            Link Component
          </div>

          {/* -------- Omdb -------- */}
          <div id="OmdbContainer" className="col-sm Component">
            <OmdbContainer />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Dashboard;
