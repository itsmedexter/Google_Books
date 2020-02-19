import React from "react";

function Nav() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        React Google Book
      </a>
      <ul className="navbar-nav">
     <li className="nav-item">
       <a className="nav-link navbar-brand" id="savedLink" href="/bookshelf">Save</a>
     </li>
   </ul>
    </nav>
  );
}

export default Nav;
