import React from 'react';
import vikram from '../images/javacourseimg.jpg';
import '../css/AllCourses.css'
import NavBar from './NavBar';
import Footer from './Footer';


const Courses = () => {
    return (
        <div>
            <NavBar/>
        <div className="course-main">
            
            <div className="d1">
                <div className="heading">All Courses</div>
            </div>
            <div className="Courses">
                {Array.from({ length: 15 }).map((_, index) => (
                    <div className="course" key={index}>
                        <img src={vikram} alt="" />
                        <div className="c_1">
                            <i className="fa-solid fa-arrow-up-right-dots"></i>
                            <span>103<sup>+</sup>Neophytes</span>
                        </div>
                        <div className="c_2">
                            <p>DSA to Development: A Complete Guide</p>
                        </div>
                        <div className="c_3">
                            <i className="fa-solid fa-chart-simple"></i>
                            <span>Beginner to Advanced</span>
                        </div>
                        <div className="c_4">
                            <div>
                                <i className="fa-solid fa-indian-rupee-sign"></i>
                                <span>3000</span>
                                <strike>6000</strike>
                            </div>
                            <button>Explore</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default Courses;