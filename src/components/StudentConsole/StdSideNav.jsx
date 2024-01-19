import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

function StdSideNav() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className={`sidebar d-flex flex-column justify-content-between bg-dark text-white  p-4 ${isSidebarVisible ? 'visible' : 'hidden'}`} style={{ height: '100vh' }}>
     
        <a href="#" onClick={toggleSidebar} className="d-flex align-items-center">
          <i className={`bi bi-kanban fs-5 me-2 ${isSidebarVisible ? 'rotate-icon' : ''}`}></i>
          {isSidebarVisible && <span className="fs-5">Menu</span>}
        </a>

        <hr className="text-secondary mt-2" /> 

        <ul className="nav-items p-0 text-start">
          <Link to="S2" className="nav-link text-white">
            <i className="bi bi-people me-2 fs-5"></i>
            {isSidebarVisible && <span className="fs-5">My Learning</span>}
          </Link>
        </ul>

          <ul className="nav-items p-0 text-start">
            <Link to="S3" className="nav-link text-white">
              <i className="bi bi-table me-2 fs-5"></i>
              {isSidebarVisible && <span className="fs-5">Library</span>}
            </Link>
            </ul>
          <ul className="nav-items p-0 text-start">
            <Link to="S4" className="nav-link text-white">
              <i className="bi bi-grid me-2 fs-5"></i>
              {isSidebarVisible && <span className="fs-5">Fees Enquiry</span>}
            </Link>
            </ul>
          <ul className="nav-items p-0 text-start">
            <Link to="S5" className="nav-link text-white">
              <i className="bi bi-cash-coin me-2 fs-5"></i>
              {isSidebarVisible && <span className="fs-5">Manage Fees</span>}
            </Link>
            </ul>
          <ul className="nav-items p-0 text-start">
            <Link to="S6" className="nav-link text-white">
              <i className="bi bi-book-half me-2 fs-5"></i>
              {isSidebarVisible && <span className="fs-5">Exam</span>}
            </Link>
            </ul>
          <ul className="nav-items p-0 text-start">
            <Link to="S7" className="nav-link text-white">
              <i className="bi bi-journal-check me-2 fs-5"></i>
              {isSidebarVisible && <span className="fs-5">Grade</span>}
            </Link>
            </ul>
          <ul className="nav-items p-0 text-start">
            <Link to="S8" className="nav-link text-white">
              <i className="bi bi-buildings me-2 fs-5"></i>
              {isSidebarVisible && <span className="fs-5">etc</span>}
            </Link>
            </ul>
          <ul className="nav-items p-0 text-start">
            <Link to="S9" className="nav-link text-white">
              <i className="bi bi-bar-chart-fill me-2 fs-5"></i>
              {isSidebarVisible && <span className="fs-5">etc</span>}
            </Link>
            </ul>
          
      {/* ... your existing bottom section */}
    </div>
  );
}

export default StdSideNav;