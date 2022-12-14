import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();


  const onLogout = () => {
    navigate('/login', {
      replace: true,
    }); 
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2" >
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              ` nav-item nav-link ${isActive ? " active " : " "} `
            }
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              ` nav-item nav-link ${isActive ? " active " : " "} `
            }
            to="/dc"
          >
            DC
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapsed d-flex justify-content">
        <ul className="navbar-nav ml-auto">
            <span className=" nav-item nav-link text-primary ">
              AndréERM
            </span>

            <button
              className=" nav-item nav-link btn"
              onClick={onLogout }
            >
              Logout
            </button>
        </ul>
      </div>
    </nav>
  );
};

export { Navbar };
