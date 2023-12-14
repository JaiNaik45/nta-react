import { useEffect } from 'react';
import '../css/Layout.css'
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Cookies from 'js-cookie';
import axios from '../api/axios';
import profile from '../images/blockchaincourseimg.png'
function NavBar(){
    const navigate=useNavigate();
    const baseUrl = "http://localhost:3500/api"
  const [userDetails,setUserDetails] = useState(null)
  const [firstRender,setFirstRender] = useState(false)
  const [loggedin, setLoggedin] = useState()
  useEffect( async ()=>{
    const data = {
        "cookie": Cookies.get("access_token")
    }
    const user_data = await axios.post(`${baseUrl}/user/fetchUserDetails`,data);
    console.log(user_data.data.data,"user_data")
    setUserDetails(user_data.data.data)
    if(user_data.data.data){
        setLoggedin(true)
    }
    else{
        setLoggedin(false)
    }
    setFirstRender(true)
},[])
    
   return firstRender && (
        <div>
            <div className="navbar">
            <nav>
            <ul id="deatils">
                <li><a href="/">Home</a></li>
                <li><a href="#aboutpara">About</a></li>
                <li id="listofcourses"> <a href="/">Courses</a></li>
                <li><Link to="/contactus">Contact</Link></li>
            </ul>
            <a href="/"><h2 className="LOGO">N<sub>2</sub>A</h2></a>

                
        {
            loggedin === true ?(
                <div className='navbar-loggedin'>
                    <div className='user-name'> {userDetails.name}</div>
                   <img src={profile} alt="Profile Picture" className='navbar-pic' onClick={()=>{
                    navigate('/studentdashboard/student/profile')
                   }}/>
                </div>
                
            ):(
                <div className='sign-log-buttons'>
                <button className="button" onClick={()=>{navigate('/signup')}}>Signup</button>
                <button className="button" onClick={()=>{navigate('/login')}}>Login</button>
            </div>
            )
        }
            
            
        </nav>
            </div>
        </div>
    )
}

export default NavBar;