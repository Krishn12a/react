import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

function AdmSideNav() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className={`sidebar d-flex flex-column justify-content-between bg-dark text-white p-4 ${isSidebarVisible ? 'visible' : 'hidden'}`} style={{ height: '100vh' }}>
     
        <a href="#" onClick={toggleSidebar} className="d-flex align-items-center">
          <i className={`bi bi-kanban fs-5 me-2 ${isSidebarVisible ? 'rotate-icon' : ''}`}></i>
          <span className="fs-4">Manage</span>
        </a>

        <hr className="text-secondary mt-2" />

        <ul className="nav-items p-0 text-start">
          <Link to="M2" className="nav-link text-white">
            <i className="bi bi-people me-2 fs-5"></i>
            {isSidebarVisible && <span className="fs-5">Manage User</span>}
          </Link>
        </ul>

          <ul className="nav-items p-0 text-start">
            <Link to="M3" className="nav-link text-white">
              <i className="bi bi-table me-2 fs-5"></i>
              {isSidebarVisible && <span className="fs-5">Manage Role</span>}
            </Link>
            </ul>
          <ul className="nav-items p-0 text-start">
            <Link to="M4" className="nav-link text-white">
              <i className="bi bi-grid me-2 fs-5"></i>
              {isSidebarVisible && <span className="fs-5">Manage Courses</span>}
            </Link>
            </ul>
          <ul className="nav-items p-0 text-start">
            <Link to="M5" className="nav-link text-white">
              <i className="bi bi-cash-coin me-2 fs-5"></i>
              {isSidebarVisible && <span className="fs-5">Manage Fees</span>}
            </Link>
            </ul>
          <ul className="nav-items p-0 text-start">
            <Link to="M6" className="nav-link text-white">
              <i className="bi bi-book-half me-2 fs-5"></i>
              {isSidebarVisible && <span className="fs-5">Manage Exams</span>}
            </Link>
            </ul>
          <ul className="nav-items p-0 text-start">
            <Link to="M7" className="nav-link text-white">
              <i className="bi bi-journal-check me-2 fs-5"></i>
              {isSidebarVisible && <span className="fs-5">Manage Attendance</span>}
            </Link>
            </ul>
          <ul className="nav-items p-0 text-start">
            <Link to="M8" className="nav-link text-white">
              <i className="bi bi-buildings me-2 fs-5"></i>
              {isSidebarVisible && <span className="fs-5">Manage Institute</span>}
            </Link>
            </ul>
          <ul className="nav-items p-0 text-start">
            <Link to="M9" className="nav-link text-white">
              <i className="bi bi-bar-chart-fill me-2 fs-5"></i>
              {isSidebarVisible && <span className="fs-5">Manage Grade</span>}
            </Link>
            </ul>
          <ul className="nav-items p-0 text-start">
            <Link to="M10" className="nav-link text-white">
              <i className="bi bi-bookshelf me-2 fs-5"></i>
              {isSidebarVisible && <span className="fs-5">Manage Library</span>}
            </Link>
            </ul>
          <ul className="nav-items p-0 text-start">
            <Link to="M11" className="nav-link text-white">
              <i className="bi bi-receipt me-2 fs-5"></i>
              {isSidebarVisible && <span className="fs-5">Manage Invoice</span>}
            </Link>
            </ul>
          <ul className="nav-items p-0 text-start">
            <Link to="M12" className="nav-link text-white">
              <i className="bi bi-person-heart me-2 fs-5"></i>
              {isSidebarVisible && <span className="fs-5">Manage Alumini</span>}
            </Link>
            </ul>
          <ul className="nav-items p-0 text-start">
            <Link to="M13" className="nav-link text-white">
              <i className="bi bi-ui-radios me-2 fs-5"></i>
              {isSidebarVisible && <span className="fs-5">Manage Feedback</span>}
            </Link>
            </ul>
        

            <ul className="nav-items p-0 text-start">
          <Link to="M14" className="nav-link text-white">
            <i className="bi bi-ui-checks-grid me-2 fs-5"></i>
            {isSidebarVisible && <span className="fs-5">Manage FAQs</span>}
          </Link>
        </ul>
      {/* ... your existing bottom section */}
    </div>
  );
}

export default AdmSideNav;