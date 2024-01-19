import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import S1 from './S1';
import S2 from './S2';
import S3 from './S3';
import S4 from './S4';
import S5 from './S5';
import S6 from './S6';
import S7 from './S7';

import StdSideNav from './StdSideNav';

const StdSideNavRoute = () => {
  return (
    <BrowserRouter>
    <div className="d-flex">
        <div className="col-auto">
            <StdSideNav/>
        </div>
        <div>
            <Routes>
                <Route path="/" element={<S1/>}></Route>
                <Route path="/S2" element={<S2/>}></Route>
                <Route path="/S3" element={<S3/>}></Route>
                <Route path="/S4" element={<S4/>}></Route>
                <Route path="/S5" element={<S5/>}></Route>
                <Route path="/S6" element={<S6/>}></Route>
                <Route path="/S7" element={<S7/>}></Route>
            </Routes>
        </div>
    </div>
    </BrowserRouter>
  )
}

export default StdSideNavRoute  


