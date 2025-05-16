import React from 'react'
import { Route, Routes, useMatch } from 'react-router-dom'
import Home from './pages/student/Home.jsx'
import CourseList from './pages/student/CourseList.jsx'
import CourseDetails from './pages/student/CourseDetails.jsx'
import MyEnrollments from './pages/student/MyEnrollments.jsx'
import Player from './pages/student/Player.jsx'
import Loading from './components/student/Loading.jsx'
import Educator from './pages/educator/Educator.jsx'
import Dashboard from './pages/educator/Dashboard.jsx'
import AddCourse from './pages/educator/AddCourse.jsx'
import MyCourse from './pages/educator/MyCourses.jsx'
import StudentEnrolled from './pages/educator/StudentsEnrolled.jsx'
import Navbar from './components/student/Navbar.jsx'
import "quill/dist/quill.snow.css";

const App = () => {

  const isEducatorRoute = useMatch('/educator/*')

  return (
    <div className='text-default min-h-screen bg-white'>
      {!isEducatorRoute && <Navbar></Navbar>}
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/course-list' element={<CourseList></CourseList>}></Route>
        <Route path='/course-list/:input' element={<CourseList></CourseList>}></Route>
        <Route path='/course/:id' element={<CourseDetails></CourseDetails>}></Route>
        <Route path='/my-enrollments' element={<MyEnrollments></MyEnrollments>}></Route>
        <Route path='/player/:courseId' element={<Player></Player>}></Route>
        <Route path='/loading/:path' element={<Loading></Loading>}></Route>
        <Route path='/educator' element={<Educator></Educator>}>
            <Route path='/educator' element={<Dashboard></Dashboard>}></Route>
            <Route path='add-course' element={<AddCourse></AddCourse>}></Route>
            <Route path='my-courses' element={<MyCourse></MyCourse>}></Route>
            <Route path='student-enrolled' element={<StudentEnrolled></StudentEnrolled>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App