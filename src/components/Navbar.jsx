import React from "react";
import { Dropdown } from "react-bootstrap";
import Logo from "../assets/Images/HeaderLogo.png";

const Navbar = () => {
 

  return (
    <div className="container-fluid px-5 header sticky-top" style={{backgroundColor:'white'}}>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 mb-0">
        <a
          href="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <img src={Logo} style={{width:'110px',height:'40px'}} alt="Logo" />
        </a>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="#" className="nav-link px-2 ">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 menu-color">
              Courses
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 menu-color">
              About
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 menu-color">
              Branches
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 menu-color">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 menu-color">
              FAQs
            </a>
          </li>
        </ul>
        {/* Login Dropdown and Person Icon */}
        <div className="col-md-3 d-flex align-items-center justify-content-end">
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Login
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Student</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Admin</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Faculty</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

          <i className="bi bi-person fs-3 ms-3"></i>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
