import React from "react";

function NavBar() {
  return (
    <ul className="nav nav-pills nav-fill">
      <li className="nav-item nav-item1">
        <a className="nav-link active" href="#!">
          nav-item1
        </a>
      </li>
      <li className="nav-item nav-item2">
        <a className="nav-link" href="#B1">
          B1
        </a>
      </li>
      <li className="nav-item nav-item3">
        <a className="nav-link" href="#C1">
          C1
        </a>
      </li>
      <li className="nav-item nav-item4">
        <a className="nav-link" href="#D1">
          D1
        </a>
      </li>
      <li className="nav-item nav-item5">
        <a className="nav-link" href="#E1">
          E1
        </a>
      </li>
      <li className="nav-item nav-item6">
        <a className="nav-link" href="#F2">
          F2
        </a>
      </li>
    </ul>
  );
}

export default NavBar;
