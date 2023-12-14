
import { useState } from 'react';
import {Link} from 'react'

import '../css/TeacherDashboard.css'
import TeacherSideBar from '../components/TeacherSideBar';
import { Route,Routes } from 'react-router-dom';
import CreateCourse from '../components/CreateCourse';
import AddCourse from '../components/AddCourse';
import UserProfile from '../components/UserProfile';

function TeacherDashboard() {
 
  
  
      return (
    <div className='teacher-main'>
            
    <div className='teacher-left'>
    <TeacherSideBar/>
    </div>
    <div className='teacher-right'>
    <Routes>
    <Route path='/teacher/createCourse' element={<AddCourse/>}/>
    <Route path='/teacher/profile' element={<UserProfile/>}/>
    </Routes>
    </div>
    
    
          </div>
      );
  }
  


export default TeacherDashboard;
