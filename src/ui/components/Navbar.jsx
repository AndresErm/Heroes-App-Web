import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">

        <div className="navbar-nav">
          <NavLink className="nav-item" to="/marvel" >
            Marvel
          </NavLink>

          <NavLink className="nav-item " to="/dc">
            DC
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <NavLink
           onClick={ ({isActive}) => `nav-link ${isActive === true}  `   }
           className="nav-item" 
           to="/login">
            Logout
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};


export { Navbar }