import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';

import '../Style/Students.css';



const Student = () => {
  const [data, setData] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [numberOfSubjects, setNumberOfSubjects] = useState(0);
  const [numberOfStudents, setNumberOfStudents] = useState(0);
  const [chartInstance, setChartInstance] = useState(null);

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

//   const filteredStudents = selectedSubject === 'All'
//     ? data
//     : data.filter(student => student[2] === selectedSubject);

  const studentToShow = data.find(student => student[0] === 8); // Filter student with ID 1

  // Check conditions to display a message if the student doesn't exist or conditions aren't met
  const displayMessage = !studentToShow || (studentToShow[6] < 50 && studentToShow[3] <= 40);

  useEffect(() => {
    // Destroy previous chart instance before creating a new one
    if (chartInstance) {
      chartInstance.destroy();
    }

    if (document.getElementById("barGraph") && studentToShow) {
      const ctx = document.getElementById("barGraph").getContext("2d");

      const newChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Score', 'Present Days', 'Absent Days', 'Attendance Percentage'],
          datasets: [{
            label: 'Student Stats',
            data: [studentToShow[3], studentToShow[4], studentToShow[5] - studentToShow[4], studentToShow[6]],
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
          }],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      setChartInstance(newChartInstance);
    }
  }, [studentToShow]);

  return (
    <div className="container-fluid" style={{ background: '#e8f4f9' }}>
      
      
      <div className="row">



        <div className="col-md-6">
          <div id='card' className="card box-shadow mx-auto my-5" style={{ width: '100%' }}>
            {/* ... (rest of your code) */}

            
            <div className="card-body mx-auto">
              <h4 className="card-title">REPORT CARD</h4>
              <table className="table caption-top">
                <tbody>
                  <tr>
                    <th scope="row">Register No :</th>
                    <td>{studentToShow?.[0]}</td>
                  </tr>
                  <tr>
                    <th scope="row">Student Name :</th>
                    <td>{studentToShow?.[1]}</td>
                  </tr>
                  <tr>
                    <th scope="row">Subject :</th>
                    <td>{studentToShow?.[2]}</td>
                  </tr>

                  <tr>
                  <th scope="row" class="table-danger">Score : </th>
                    <td class="table-danger">{studentToShow?.[3]}</td>
                  </tr>
                 

                  



                  {/* Add more details as needed */}
                </tbody>
              </table>
              
              <hr />
              <div>
  {studentToShow?.[3] >= 0 && studentToShow?.[3] <= 10 ? (
    <p>
      Don’t be discouraged. It’s important to
      stay motivated and keep working hard. Try to identify the areas where you
      struggled and focus on improving them. Don’t be afraid to ask your
      teachers or peers for help if you need it. Remember, every small step
      counts towards achieving your goals.
    </p>
  ) : studentToShow?.[3] > 10 && studentToShow?.[3] <= 20 ? (
    <p>
      It’s important to stay motivated and
      keep working hard. Try to identify the areas where you struggled and
      focus on improving them. Don’t be afraid to ask your teachers or peers
      for help if you need it. Remember, every small step counts towards
      achieving your goals.
    </p>
  ) : studentToShow?.[3] > 20 && studentToShow?.[3] <= 30 ? (
    <p>
      It’s important to stay motivated and
      keep working hard. Try to identify the areas where you struggled and
      focus on improving them. Don’t be afraid to ask your teachers or peers
      for help if you need it. Remember, every small step counts towards
      achieving your goals.
    </p>
  ) : studentToShow?.[3] > 30 && studentToShow?.[3] <= 40 ? (
    <p>
      It’s important to stay motivated and
      keep working hard. Try to identify the areas where you struggled and
      focus on improving them. Don’t be afraid to ask your teachers or peers
      for help if you need it. Remember, every small step counts towards
      achieving your goals.
    </p>
  ) : studentToShow?.[3] > 40 && studentToShow?.[3] <= 50 ? (
    <p>
      It’s important to stay motivated and
      keep working hard. Try to identify the areas where you struggled and
      focus on improving them. Don’t be afraid to ask your teachers or peers
      for help if you need it. Remember, every small step counts towards
      achieving your goals.
    </p>
  ) : studentToShow?.[3] > 50 && studentToShow?.[3] <= 60 ? (
    <p>
      Congratulations on passing! Keep up
      the good work and continue to strive for excellence. Try to set
      achievable goals for yourself and work towards them. Don’t be afraid to
      challenge yourself and take on new opportunities.
    </p>
  ) : studentToShow?.[3] > 60 && studentToShow?.[3] <= 70 ? (
    <p>
        You’re off to a great start! Keep
      building on your strengths and work on improving your weaknesses. Try
      to stay organized and manage your time effectively. Remember, practice
      makes perfect!
    </p>
  ) : studentToShow?.[3] > 70 && studentToShow?.[3] <= 80 ? (
    <p>
        Well done! You’re doing great. Keep up
      the momentum and continue to work hard. Try to stay focused and avoid
      distractions. Remember, it’s important to take breaks and recharge your
      batteries.
    </p>
  ) : studentToShow?.[3] > 80 && studentToShow?.[3] <= 90 ? (
    <p>
    Congratulations on your excellent
      performance! Keep up the good work and continue to challenge yourself.
      Try to set high standards for yourself and work towards achieving them.
      Remember, hard work pays off!
    </p>
  ) : studentToShow?.[3] > 90 && studentToShow?.[3] <= 100 ? (
    <p>
       You’re a superstar! Congratulations on
      your outstanding achievement. Keep up the amazing work and continue to
      strive for excellence. Remember, the sky’s the limit!
    </p>
  ) : (
    <p>Invalid score</p>
  )}
  <hr></hr>
</div>




              <div>
              {studentToShow?.[3] > 40 ? (
                <i id='i' className="bi bi-journal-check me-1 text-success ">
                  <font className='text-success'>P</font>
                </i>
              ) : (
                <i id='i' className="bi bi-journal-x  me-1 text-danger">
                  <font className='text-danger'>F</font>
                </i>
              )}
              </div>
            </div>


          </div>
        </div>

        <div className="col-md-6">
          <div id='card' className="card box-shadow mx-auto my-5" style={{ height:'300', width: '100%' }}>
            <canvas id="barGraph" height="200"></canvas>
          </div>
        </div>
      </div>




      {displayMessage && (
        <div className="alert alert-warning" role="alert">
          {(!studentToShow && 'Student not found') || 'You have to complete above 70% of attendance or complete your test'}
        </div>
      )}
    </div>
  );
};

export default Student;
