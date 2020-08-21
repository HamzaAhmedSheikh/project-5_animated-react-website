import React, { useLayoutEffect, useRef } from 'react'
import '../css/style.css'

import about from '../images/about.png'

import 'animate.css'

import AOS from 'aos';
import 'aos/dist/aos.css'; 




export const About = () => {

    AOS.init({
        offset: 300,
        duration: 1200    
    });

   const frameThree = useRef(null);
   const frameFour = useRef(null);
   const frameFive = useRef(null);

   useLayoutEffect(() => {

    var animationThree = [
        { transform: 'translateY(-10%)' },  
      ];

    var animationFour = [
        { transform: 'translateY(-30%)' },         
      ];  

    var animationFive = [
        { transform: 'translateY(-10%)' },        
                
      ];  

      frameThree.current.animate(
        animationThree, {
            easing: "ease-in-out",
            direction: "alternate", 
            duration: 1000,
            delay: 400, 
            iterations: Infinity,
        });   


        frameFour.current.animate(
            animationFour, {
                easing: "ease-in-out",
                direction: "alternate", 
                duration: 1000,
                delay: 400, 
                iterations: Infinity,
            });   

        frameFive.current.animate(
            animationFive, {
                easing: "ease-in-out",
                direction: "alternate", 
                duration: 1000,
                delay: 400, 
                iterations: Infinity,
            });    
          
    })
    
   


    return (
        <section id="about">
            <div className="about-left-col" data-aos="fade-left" data-aos-easing="ease-out-cubic" ref={frameFive}>  
               <img src={about} alt="about section" />
            </div>

            <div className="about-right-col">
               <div className="about-text">
                   <h1 data-aos="fade-left"> About Us </h1>
                   <span className="square"></span> 
                   <p data-aos="fade-left"  data-aos-easing="ease-in-out" ref={frameThree}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan
                    urna et sagittis semper. Nam id erat ultricies, consequat arcu sit amet, semper felis.
                    Sed congue erat sit amet lorem mattis, sed elementum ligula aliquet. Cras molestie, est non accumsan gravida, justo leo semper sapien, id efficitur odio purus at neque. Sed vehicula dictum tortor sit amet bibendum. In fermentum pharetra justo, in rhoncus eros convallis commodo. Integer bibendum viverra nunc
                   </p> <br /> <br />

                   <div className="line">
                    <span className="line-1"></span> <br />
                    <span className="line-2"></span> <br />
                    <span className="line-3"></span>
                   </div>

                    <h2 ref={frameFour}>
                     <q>
                       Learning is not attained by chance,
                       it must be sought for with ardor and
                       attended to with diligence.
                     </q>   
                    </h2>
                    <h3> ----Abigail Adams</h3>
               </div> 
            </div>

        </section>           
    )
}


export default About