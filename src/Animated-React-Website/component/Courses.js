import React, { useLayoutEffect, useRef } from 'react'
import '../css/style.css'

import AOS from 'aos';
import 'aos/dist/aos.css'; 

import 'animate.css'

import  CoursesDetails from '../images/course.png'

export const Courses = () => {
  
    AOS.init({
      offset: 180,
      duration: 1200,
      ease: "ease-in-out",  
    });

    const refOne = useRef(null);
    const refTwo = useRef(null);    

    useLayoutEffect(() => {
      var animateRefOne = [
        { transform: 'translateX(40%)' },  
      ];

      var animateRefTwo = [
        { transform: 'translate(-20%)' },  
      ];    
  

      refOne.current.animate(
        animateRefOne, {
          easing: "ease-in-out",
          direction: "alternate", 
          duration: 1000,
          delay: 400, 
          iterations: Infinity
      });

      refTwo.current.animate(
        animateRefTwo, {
          easing: "ease-in-out",
          direction: "alternate", 
          duration: 1000,
          delay: 400, 
          iterations: Infinity
      });

    })



    return (
        <section id="courses">
          <div className="container course-row">
            <div className="courses-left-col">
              <div className="course-text">
                 <h1 ref={refOne}> Browse our top <br /> courses </h1> 
                 <span className="square"></span> 
                 <p data-aos="fade-left">
                   Contrary to popular belief, Lorem Ipsum is not simply random text.
                   It has roots in a piece of <br /> classical Latin literature from 45 BC, making
                   it over 2000 years old. Richard McClintock, a Latin <br /> professor at Hampden   
                 </p>
                 <button className="commom-btn" data-aos="fade-left"> View All Courses </button>

                 <div className="line">
                  <span className="line-1"></span> <br />
                  <span className="line-2"></span> <br />
                  <span className="line-3"></span>
                 </div>  

              </div>  
            </div>

            <div className="courses-right-col" ref={refTwo}>
               <img src={CoursesDetails} alt="courses"  />
            </div>
          </div>  
        </section>        
    )
}

export default Courses