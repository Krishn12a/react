import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import '../components/Course.css';

const CourseListComp = () => {
  const [course, setCourse] = useState([]);
  const [courseName, setCourseName] = useState('');
  const [module, setModule] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [validDate, setValidDate] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('http://localhost:8080/courses/all')
      .then((res) => {
        setCourse(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error('Error fetching course data:', err);
      });
  };

  const fetchModule = (selectedCourseName) => {
    axios
      .get(`http://localhost:8080/modules/mnamesByCourse?courseName=${selectedCourseName}`)
      .then((res) => {
        console.log('Fetched module data:', res.data);
        const updatedModule = [...res.data];
        setModule(updatedModule);
      })
      .catch((err) => {
        console.error('Error fetching module data:', err);
      });
  };

  const handleCourseChange = (event) => {
    const selectedCourseName = event.target.value;
    console.log('Selected course:', selectedCourseName);
    setCourseName(selectedCourseName);
    fetchModule(selectedCourseName);
  };

  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);

    // Check if the selected date is today or a past date
    const isPastDate = selectedDate <= new Date();

    setSelectedDate(isPastDate ? selectedDate : new Date()); // Update selectedDate only if it's today or a past date
    setValidDate(true); // Reset the validation status

    // Check if the selected date is within the start and end dates of the course
    const selectedCourse = course.find((c) => c.course_name === courseName);
    if (selectedCourse) {
      const startDate = new Date(selectedCourse.start_date);
      const endDate = new Date(selectedCourse.end_date);
      if (selectedDate < startDate || selectedDate > endDate) {
        setValidDate(false);
      }
    }
  };

  const handleSubmit = () => {
    // Validate that all required fields are selected
    if (!courseName || !module || !selectedDate) {
      openModal('Please select all required fields.');
      return;
    }

    else if (validDate) {
      navigate(`/studentComp/${selectedDate.toISOString()}/${courseName}`);
    } else {
      openModal('Please select a valid date within the course duration.');
    }
  };

  const openModal = (message) => {
    setModalMessage(message);
    setModalOpen(true);

    // Auto-close the modal after 3 seconds (adjust as needed)
    setTimeout(() => {
      setModalOpen(false);
    }, 3000);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return ( 
    <div>
      <div className='container-fluid CourseLC'>
        <div className='CourseLC2' style={{border: '1px solid #ddd', padding: '10px', width: '550px',height:'500px'}}>

      <h2 className="text-center m-4">Mark Attendance</h2>
        <form className='form-group' style={{textAlign:'left'}}>
         
          <div>

          
          <label htmlFor="cname"></label>
            Select Course :
            <select  name="courseName" id="cname" onChange={handleCourseChange}>
              <option value="">Select a Course</option>
              {course.map((course) => (
                <option key={course.course_id} value={course.course_name}>
                  {course.course_name}
                </option>
              ))}
            </select>
          
          </div><br/>
          <div >
            <label htmlFor="mname">Select Module :</label>
            <select name="moduleName" id="mname">
              <option value="">Select a module</option>
              {courseName &&
                module.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
            </select>
          </div><br/>

          <div>
            <label htmlFor="date">Date : </label>
            <input
              type="date"
              id="datePicker"
              value={selectedDate.toISOString().split('T')[0]} // Convert to 'YYYY-MM-DD' format
              onChange={handleDateChange}
              max={new Date().toISOString().split('T')[0]} // Set the maximum date to today
            />
          </div><br/>

          
        </form>
     
      <button type="button" onClick={handleSubmit}>
            Submit
          </button>
          </div>
          </div>
      {/* Bootstrap Modal */}
      <Modal show={isModalOpen} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
      </Modal>
    </div>
  );
};

export default CourseListComp;
