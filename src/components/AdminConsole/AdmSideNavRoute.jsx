import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AdmSideNav from './AdmSideNav';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import M1 from './M1';
import M2 from './M2';
import M3 from './M3';
import M4 from './M4';
import M5 from './M5';
import M6 from './M6';
import M7 from './M7';
import M8 from './M8';
import M9 from './M9';
import M10 from './M10';
import M11 from './M11';
import M12 from './M12';
import M13 from './M13';

import M14 from './M14';

const AdmSideNavRoute = () => {
  return (
    <BrowserRouter>
    <div className="d-flex">
        <div className="col-auto">
            <AdmSideNav/>
        </div>
        <div>
            <Routes>
                <Route path="/" element={<M1/>}></Route>
                <Route path="/M2" element={<M2/>}></Route>
                <Route path="/M3" element={<M3/>}></Route>
                <Route path="/M4" element={<M4/>}></Route>
                <Route path="/M5" element={<M5/>}></Route>
                <Route path="/M6" element={<M6/>}></Route>
                <Route path="/M7" element={<M7/>}></Route>
                <Route path="/M8" element={<M8/>}></Route>
                <Route path="/M9" element={<M9/>}></Route>
                <Route path="/M10" element={<M10/>}></Route>
                <Route path="/M11" element={<M11/>}></Route>
                <Route path="/M12" element={<M12/>}></Route>
                <Route path="/M13" element={<M13/>}></Route>
                <Route path="/M14" element={<M14/>}></Route>
            </Routes>
        </div>
    </div>
    </BrowserRouter>
  )
}

export default AdmSideNavRoute  


function Home(){
    return <h2>Home Component</h2>
}

function Order(){
    return <h2>Order Component</h2>
}