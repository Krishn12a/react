import React, { Component } from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import StudentComp from './StudentComp'
import CourseListComp from './CourseListComp'

export class RouterComp extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Routes>
                       <Route path='' element={<CourseListComp></CourseListComp>}></Route>
                       <Route path="/studentComp/:date/:courseName" element={<StudentComp />} />
                    </Routes>                
                </BrowserRouter>
            </div>
        )
    }
}

export default RouterComp
