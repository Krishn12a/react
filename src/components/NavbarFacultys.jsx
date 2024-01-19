import React from 'react'

const NavbarFacultys = () => {
  return (
    <header className="p-3" style={{ backgroundColor: '#003060', color: 'white' }}>
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <h3>Welcome Faculty..</h3>
          <div>
            <button type="button" className="btn btn-outline-light me-2">Faculty Management Console</button>
            <button type="button" className="btn btn-warning">Logout</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavbarFacultys