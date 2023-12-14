import { Route,Routes } from "react-router-dom"
import TeacherDashboard from "./TeacherDashboard"
import UserProfile from "../components/UserProfile"
import StudentSideBar from "./StudentSideBar"
import '../css/Student.css'
const StudentDashBoard = ()=>{
    return (
        <div className="student-dashboard">
            <div className="student-dashboard-left">
            <StudentSideBar/>
            </div>
            <div className="student-dashboard-right">
            <Routes>
                <Route path="/student/profile" element={<UserProfile/>}/>
            </Routes>
            </div>
            
        </div>
    )
}

export default StudentDashBoard;