import React, { useState, useEffect, useRef } from 'react';

const Try = () => {
  const [dataA, setDataA] = useState([12, 13, 15, 23]);
  const [dataB, setDataB] = useState([77, 66, 88, 77]);

  const combinedData = dataA.map((element, index) => ({
    valueA: element,
    valueB: dataB[index],
  }));

  return (
    <div>

<div>
      {/* Include Font Awesome link in the head of your HTML file */}
      <head>
        <link rel="stylesheet" href="https://cdn.skypack.dev/font-awesome@4.7.0/css/font-awesome.min.css" />
      </head>

      {/* Use Font Awesome icons in your component */}
      {/* <i className="fa fa-camera-retro"></i> */}
      {/* Replace 'fa-camera-retro' with the specific class for the icon you want to use */}
    </div>
      <h2>Combined Data</h2>
      <ul>
        {combinedData.map((item, index) => (
          <li key={index}>
            Value A: {item.valueA}, Value B: {item.valueB}
          </li>
        ))}
      </ul>

      <div className="container py-5">
      <div className="row justify-content-center">
        
        
        
        <div className="col-12 col-lg-4">
          <div className="card box-shadow mx-auto my-5" style={{ width: '18rem' }}>
            <img src="https://cdn-icons-png.flaticon.com/512/4113/4113045.png" height={350} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Narcisse</h5>
              <hr />
              <p className="card-text">Some quick example</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" ><path fill="#ffffff" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,90.7C672,64,768,64,864,85.3C960,107,1056,149,1152,186.7C1248,224,1344,256,1392,272L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" /></svg>
            {/* <a href=""><i className="fas fa-disease" ></i></a> */}
            <div id='i'>pass</div>
          </div>
        </div>

        {/* Add similar JSX for other col elements */}
        
      </div>
    </div>

      
    </div>
  );
};

export default Try;

