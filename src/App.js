import Register from './Register';
import Register2 from './Register2';
import Layout from './Layout';
import StudentDashBoard from './pages/StudentSideBar.js';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ForgotPasswordpage from './components/ForgotPasswordpage'
import ForgotPasswordVerify from './components/ForgotPasswordVerify';
import ResetPassword from './components/ResetPassword';
import TeacherDashboard from './pages/TeacherDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Contact from './components/Contact';
import Footer from './components/Footer'
import AddCourse from './components/AddCourse.js'
import Profile from './components/Profile.js';
import Courses from './components/Course.js';
import UserProfile from './components/UserProfile.js';
import TeacherPage from './pages/StudentDashboard.js';
import { useEffect } from 'react';
import Auth from './Auth/Auth.js';
import Cookies from 'js-cookie';
import axios from './api/axios.js';
import { useState } from 'react';
// import {Link} from "react-router-dom
// export default App;
function App() {
  
  return (
    // <div>
    //   <h1>Hello</h1>
      

    
    <BrowserRouter>
    {/* <Link to="/signup">signup</Link><br></br>
    <Link to="/login">login</Link> */}

      <Routes>
      
        <Route path="/" element={<Layout/>}/>
        <Route  path="/signup" element={<Register2 />} />
        <Route path='/login' element={<Register />} />
        <Route path='/studentdashboard/*' element={<TeacherPage/>}/>
        <Route path='/forgotpassword' element={<ForgotPasswordpage/>}/>
        <Route path='/forgotpasswordVerify' element={<ForgotPasswordVerify/>}/>
        <Route path='/resetpassword' element={<ResetPassword/>}/>
        <Route path='/teacherdashboard/*' element={<TeacherDashboard/>}/>
        <Route path='/admindashboard/*' element={<AdminDashboard/>}/>
        <Route path='/contactus' element={<Contact/>}/>
        <Route path='/footer' element={<Footer/>}/>
        <Route path='/addCourse' element={<AddCourse/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/allCourses' element={<Courses/>}/>
        <Route path='/userProfile' element={<UserProfile/>}/>
      </Routes>
      
    </BrowserRouter> 
    // </div>
    
  );
}

export default App;