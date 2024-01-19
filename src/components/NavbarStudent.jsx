import React from 'react'

const NavbarStudent = () => {
    return (
        <div>
            <header className="p-3" style={{ backgroundColor: '#003060', color: 'white' }}>
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-between">
                        <h3>Welcome Student..</h3>
                        <div>
                            {/* <button type="button" className="btn btn-outline-light me-2">My Learning</button>
                            <button type="button" className="btn btn-outline-light me-2">Library</button>
                            <button type="button" className="btn btn-outline-light me-2">Fees Enquiry</button>
                            <button type="button" className="btn btn-outline-light me-2">Exam</button>
                            <button type="button" className="btn btn-outline-light me-2">Grade</button> */}
                            <button type="button" className="btn btn-warning">Logout</button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default NavbarStudent
