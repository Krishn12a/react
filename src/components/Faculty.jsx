import React, { useState, useEffect } from 'react';
import  {  useRef } from 'react';

import "bootstrap-icons/font/bootstrap-icons.css";

// import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Chart, { Colors } from 'chart.js/auto'; // Import Chart.js


import '../Style/Faculty.css';

const Faculty = () => {
    const [data, setData] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState('All');
    const [numberOfSubjects, setNumberOfSubjects] = useState(0);
    const [numberOfStudents, setNumberOfStudents] = useState(0);
  
    useEffect(() => {
      fetch('http://localhost:8080/show/grade')
        .then(response => response.json())
        .then(result => {
          setData(result);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);
  
    useEffect(() => {
      const subjects = [...new Set(data.map(student => student[2]))];
      setNumberOfSubjects(subjects.length);
      setNumberOfStudents(data.length);
    }, [data]);
  
    const handleSubjectChange = event => {
      setSelectedSubject(event.target.value);
    };
  
    const subjects = [...new Set(data.map(student => student[2]))];
  
    const filteredStudents = selectedSubject === 'All'
      ? data
      : data.filter(student => student[2] === selectedSubject);
  
    const chartContainer = useRef(null);
    const chartInstance = useRef(null);
  
    useEffect(() => {
      const updateChart = () => {
        const passStudents = filteredStudents.filter(student => student[3] > 40);
        const failStudents = filteredStudents.filter(student => student[3] <= 40);
        const passCount = passStudents.length;
        const failCount = failStudents.length;
  
        const ctx = chartContainer.current;
  
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
  
        chartInstance.current = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: ['Pass', 'Fail'],
            datasets: [{
              data: [passCount, failCount],
              backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 99, 132, 0.6)',
              ],
              borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
              ],
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            title: {
              display: true,
              text: 'Pass/Fail Ratio'
            }
          }
        });
      };
  
      updateChart();
  
      window.addEventListener('resize', updateChart);
  
      return () => {
        window.removeEventListener('resize', updateChart);
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
      };
    }, [filteredStudents]);

// =============================================

  return (
    <div className="container-fluid" style={{background:'#f0f0f0'}}>
        <br></br>
      <div className="row mb-3">
    
    
    
      <div className="col-lg-6">
        <div className="row container-fluid align-items-left">
        <div className="col-sm-12"><br></br>
            <p>"Faculty" is the term for academic staff at an institution of education. In primary and secondary schools,
                 the faculty are teachers, whereas in postsecondary institutions, professors comprise the faculty.</p>
          </div>
          <div className="col-sm-12">

            <div style={{ maxWidth: '100%', margin: '0 auto' }}>
              <img src='https://upload.wikimedia.org/wikipedia/commons/3/37/Lane%27s_Mobile_Studio_logo.png' alt='logo' width={150} height={100} />
            </div>
          </div>
          <div className="col-lg-12">
            <select
              className="form-select"
              id="subjectSelect"
              value={selectedSubject}
              onChange={handleSubjectChange}
            >
              <option value="All">All</option>
              {subjects.map(subject => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </div>
        </div>
      </div>




    <div className="col-lg-6">
        <div className="card shadow-sm">
          <div className="card-body">
            {/* <h5 className="card-title">Summary</h5> */}
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Number of Subjects</th>
                  <th scope="col">Number of Students</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td >
                  <span className="badge bg-light text-info">{selectedSubject === 'All' ? numberOfSubjects : subjects.length}</span>
                  
                  </td>
                  <td className="bg-succcess">
                  <span className="badge bg-info text-light">{filteredStudents.length}</span>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <div style={{ maxWidth: '100%', margin: '0 auto' }}>
                      <canvas ref={chartContainer} width={150} ></canvas>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>


    
  </div>
{/* ========================================= */}



<div className="row row-cols-3 row-cols-md-4">
  {filteredStudents.map(student => (
    
    
    //in case any problem <div className="row col-12 row-cols-1 col-lg-4">


          <div className="card box-shadow mx-auto my-5" style={{ width: '20rem' }}>
            <img src="https://cdn-icons-png.flaticon.com/512/4113/4113045.png" height={350} className="card-img-top" alt="..." />
            <div className="card-body mx-auto">
              <h5 className="card-title">{student[1]}</h5>
              <hr />

              <table class="table caption-top">
  {/* <thead>
    <tr>
      <th scope="col" colSpan={2}>ksjfkfdbkvs</th>
    </tr>
  </thead> */}
  <tbody>
    <tr>
      <th scope="row" >Register No : </th>
      <td>{student[0]}</td>
      
    </tr>
    <tr>
      <th scope="row">Subject : </th>
      <td>{student[2]}</td>
      
    </tr>
    <tr>
      <th scope="row" class="table-danger">Score : </th>
      <td class="table-danger">{student[3]}</td>
      
    </tr>
    <tr>
      <th scope="row">Active/Total Days : </th>
      <td>{student[4]} /{student[5]}</td>
      
    </tr>

    <tr>
      <th scope="row">Attendance Rate : </th>
      <td>{student[6]}%</td>
      
    </tr>
  </tbody>
</table>




              
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" ><path fill="#ffffff" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,90.7C672,64,768,64,864,85.3C960,107,1056,149,1152,186.7C1248,224,1344,256,1392,272L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" /></svg>
            {/* <i class="fa-solid fa-exclamation"></i> */}

            <div>
                {student[3]>40 ?  <i id='iF' class="bi bi-journal-check me-1 text-success fs-1"><font className='text-success'>P
                </font></i> : <i id='iF' class="bi bi-journal-x  me-1 fs-1 text-danger"><font className='text-danger'>F</font></i>}
            </div>

           
          </div>
        // in case any problem </div>
        
    
  ))}
</div>


  {/* ========================== */}

    </div>
  );
};

export default Faculty;
