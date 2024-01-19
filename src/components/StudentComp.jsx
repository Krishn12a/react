import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../components/Students.css';
const StudentComp = () => {
    const { date, courseName } = useParams();
    const [studentList, setStudentList] = useState([]);
    const [isAttendanceModalOpen, setAttendanceModalOpen] = useState(false);
    const [isAlertModalOpen, setAlertModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, [date, courseName]);

    const fetchData = () => {
        axios.get(`http://localhost:8080/students/byCourse?courseName=${courseName}`)
            .then((res) => {
                console.log(res.data);
                setStudentList(res.data);
            })
            .catch((err) => {
                console.error("Error fetching student data:", err);
            });
    };

    const openAttendanceModal = () => {
        setAttendanceModalOpen(true);
    };

    const closeAttendanceModal = () => {
        setAttendanceModalOpen(false);
    };

    const openAlertModal = (message) => {
        setModalMessage(message);
        setAlertModalOpen(true);

        // Auto-close the alert modal after 3 seconds (adjust as needed)
        setTimeout(() => {
            setAlertModalOpen(false);
        }, 3000);
    };

    const closeAlertModal = () => {
        setAlertModalOpen(false);
    };

    const handleAttendanceConfirmation = () => {
        closeAttendanceModal();

        const attendanceData = studentList.map((student) => {
            const radioInput = document.querySelector(`input[name="attendance-${student[0]}"]:checked`);

            if (radioInput) {
                const attendanceStatus = radioInput.value;

                return {
                    std_id: student[0],
                    std_name: student[1],
                    date: new Date(date).toISOString().split('T')[0],
                    attendanceStaus: attendanceStatus,
                    course_name: courseName,
                };
            } else {
                // Handle the case where no radio button is checked for the student
                console.warn(`No radio button checked for student ${student[0]}`);
                return null; // or handle the case as needed
            }
        });

        // Check if all students have a radio button checked
        if (attendanceData.every((data) => data !== null)) {
            // Send the attendance data as a single object
            axios.post('http://localhost:8080/api/student-attendance', JSON.stringify(attendanceData), {
                headers: { 'Content-Type': 'application/json' },
            })
                .then((response) => {
                    console.log('Attendance marked successfully:', response.data);
                    openAlertModal('Attendance marked successfully.');
                    navigate('/F7');
                })
                .catch((error) => {
                    openAlertModal("The given date and course name is already marked attendance");
                });
        } else {
            openAlertModal("Please select attendance status for all students.");
        }
    };

    const handleBack = () => {
        // Redirect to CourseListComp
        navigate('/F7');
    };

    const tableStyle = {
        backgroundColor: '#e8f4f9',
    };

    return (
        <div className='container-fluid stdC d-flex align-items-center justify-content-center'>
            <div className='stdC'>
                <div className='text-center'>
                    <h2>Attendance for {courseName}</h2>
                    <table className='table table-striped  table-bordered' style={tableStyle}>
                        <thead className='thead-dark'>
                            <tr>
                                <th>Student ID</th>
                                <th>Student Name</th>
                                <th>{new Date(date).toLocaleDateString()}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentList.map((student) => (
                                <tr key={student[0]}>
                                    <td>{student[0]}</td>
                                    <td>{student[1]}</td>
                                    <td>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name={`attendance-${student[0]}`} value="P" id={`present-${student[0]}`} />
                                            <label className="form-check-label" htmlFor={`present-${student[0]}`}>Present</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name={`attendance-${student[0]}`} value="A" id={`absent-${student[0]}`} />
                                            <label className="form-check-label" htmlFor={`absent-${student[0]}`}>Absent</label>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <br />
                    <button type="button" className="btn btn-secondary" onClick={handleBack}>Back to Course List</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" className="btn btn-primary" onClick={openAttendanceModal}>Submit</button>
                </div>
            </div>

            {/* Bootstrap Modal for Attendance Confirmation */}
            <Modal show={isAttendanceModalOpen} onHide={closeAttendanceModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Attendance Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you sure you want to submit the attendance?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeAttendanceModal}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleAttendanceConfirmation}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Bootstrap Modal for Alert */}
            <Modal show={isAlertModalOpen} onHide={closeAlertModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Alert</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalMessage}</Modal.Body>
            </Modal>
        </div>
    );
};

export default StudentComp;
