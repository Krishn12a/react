import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import F1 from './F1';
import F2 from './F2';
import F3 from './F3';
import F4 from './F4';
import F5 from './F5';
import F6 from './F6';
import F7 from './F7';
import CourseListComp from '../CourseListComp';
import StudentComp from '../StudentComp';

import FacultySideNav from './FacultySideNav';

const FacultySideNavRoute = () => {
  return (
    <BrowserRouter>
    <div className="d-flex ">
        <div className="col-auto">
            <FacultySideNav/>
        </div>
        <div style={{width:'100%'}}>
            <Routes>
                <Route path="/" element={<F1/>}></Route>
                <Route path="/F2" element={<F2/>}></Route>
                <Route path="/F3" element={<F3/>}></Route>
                <Route path="/F4" element={<F4/>}></Route>
                <Route path="/F5" element={<F5/>}></Route>
                <Route path="/F6" element={<F6/>}></Route>
                <Route path="/F7" element={<CourseListComp></CourseListComp>}></Route>
                <Route path="/studentComp/:date/:courseName" element={<StudentComp />} />
            </Routes>
        </div>
    </div>
    </BrowserRouter>
  )
}

export default FacultySideNavRoute  


