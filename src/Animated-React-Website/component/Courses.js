import React from 'react'
import '../css/style.css'

import  CoursesDetails from '../images/course.png'

export const Courses = () => {
    return (
        <section id="courses">
          <div className="container course-row">
            <div className="courses-left-col">
              <div className="course-text">
                 <h1> Browse our top <br /> courses </h1> 
                 <span className="square"></span> 
                 <p>
                   Contrary to popular belief, Lorem Ipsum is not simply random text.
                   It has roots in a piece of <br /> classical Latin literature from 45 BC, making
                   it over 2000 years old. Richard McClintock, a Latin <br /> professor at Hampden   
                 </p>
                 <button className="commom-btn"> View All Courses </button>

                 <div className="line">
                  <span className="line-1"></span> <br />
                  <span className="line-2"></span> <br />
                  <span className="line-3"></span>
                 </div>  

              </div>  
            </div>

            <div className="courses-right-col">
               <img src={CoursesDetails} alt="courses"  />
            </div>
          </div>  
        </section>        
    )
}

export default Courses