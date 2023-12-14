import { useEffect, useState } from 'react';
import '../css/UserProfile.css'
import profile from '../images/blockchaincourseimg.png'
import Cookies from 'js-cookie';
import axios from '../api/axios';

const UserProfile = ()=>{
    const baseUrl = "http://localhost:3500/api"
    const [userDetails,setUserDetails] = useState(null)
    useEffect(async ()=>{
        const data = {
            "cookie": Cookies.get("access_token")
        }
        const user_data = await axios.post(`${baseUrl}/user/fetchUserDetails`,data);
        console.log(user_data.data.data)
        setUserDetails(user_data.data.data)
    },[])
    function toggleEdit() {
        const editForm = document.getElementById('editForm');
        editForm.style.display = editForm.style.display === 'none' ? 'block' : 'none';
    }
    
    function saveChanges() {
        const email = document.getElementById('editEmail').value;
        const university = document.getElementById('editUniversity').value;
        const year = document.getElementById('editYear').value;
    
        // Update the profile details
        document.getElementById('email').textContent = email;
        document.getElementById('university').textContent = university;
        document.getElementById('year').textContent = year;
    
        // Hide the edit form
        document.getElementById('editForm').style.display = 'none';
    }
    return userDetails && (
        <div>
             <div class="profile-container">
        <div class="profile-header">
            <img src={profile} alt="Profile Picture" className='profile-pic'/>
            <h1>{userDetails.name}</h1>
            <p>Computer Science Major</p>
            <button onClick={toggleEdit}>Edit</button>
        </div>
        <div class="profile-details">
            <div class="detail">
                <h2>Email:</h2>
                <p id="email">{userDetails.email}</p>
            </div>
            <div class="detail">
                <h2>DOB:</h2>
                <p id="university">{userDetails.DOB}</p>
            </div>
            <div class="detail">
                <h2>Phone Number:</h2>
                <p id="year">{userDetails.phoneNo}</p>
            </div>
        </div>

        <div class="edit-form" id="editForm">
            <label for="editEmail">Email:</label>
            <input type="text" id="editEmail" placeholder="Enter new email"/>
            <label for="editUniversity">Dob:</label>
            <input type="text" id="editUniversity" placeholder="Enter New Dob"/>
            <label for="editYear">Phone Number:</label>
            <input type="text" id="editYear" placeholder="Enter new Phone Number"/>
            <button onClick={saveChanges}>Save Changes</button>
        </div>
    </div>
        </div>
    )
}

export default UserProfile;