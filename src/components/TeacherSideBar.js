import {AiOutlinePlus} from 'react-icons/ai'
import {RxDashboard} from 'react-icons/rx';
import {CgProfile} from 'react-icons/cg';
import {FiEdit} from 'react-icons/fi';
import {HiOutlineLogout} from 'react-icons/hi';
import {FaBook} from 'react-icons/fa'
import { NavLink, Route, Routes } from 'react-router-dom';
import '../css/TeacherDashboard.css'
import AddCourse from './AddCourse';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const TeacherSideBar=()=>{
    const navigate = useNavigate();
    return(
        
        <div className="sidebar"> 
        <header id='header'> N2A</header>
        <ul>
            <li className="options-parent"><a href="/teacherdashboard"><div className="options"><div><RxDashboard/></div><div> Dashboard</div></div></a></li>
            
            <li className="options-parent"><a href="#"><div className="options"><div><FaBook/> </div><div>My Course</div></div></a></li>
            <li className="options-parent"><NavLink to="teacher/createCourse"><div className="options"><div><AiOutlinePlus/></div> <div>Create Course</div></div></NavLink></li>
            
            <li className="options-parent"><NavLink to="teacher/profile"><div className="options"><div><CgProfile/> </div><div>Profile</div></div></NavLink></li>
            <li className="options-parent"><div className="options" id='logout'><div><HiOutlineLogout/></div> <div onClick={()=>{
                    Cookies.remove('access_token')
                    navigate('/')
                    window.location.reload()
                    }  
                    }>Log Out</div></div></li>
           
        </ul>
    </div>
        
    )
}

export default TeacherSideBar;