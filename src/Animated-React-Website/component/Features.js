import React, { useLayoutEffect, useRef } from 'react'
import '../css/style.css'

import PictureOne from '../images/pic-1.png'
import PictureTwo from '../images/pic-2.png'
import PictureThree from '../images/pic-3.png'

import AOS from 'aos';
import 'aos/dist/aos.css'; 

import 'animate.css'

export const Features = () => {

    AOS.init({
        offset: 180,
        duration: 1200,
        ease: "ease-in-out",    
    });

    const refSix = useRef(null);
    const refSeven = useRef(null);
    const refEight = useRef(null);
    const animatedLines = useRef(null);

    useLayoutEffect(() => {
        var animationSix = [
            { transform: 'translateY(-50%)' },                
        ];

        var animationSeven = [
            { transform: 'translateY(-50%)' },                
        ];

        var animationEight = [            
            { transform: 'translate(-80%)' },
            { transform: 'translateY(-300%)'},            
        ];

        var animationLine = [
            { transform: 'translateX(-90%)' }                        
        ];


        refSix.current.animate(
            animationSix, {
                easing: "ease-in-out",
                direction: "alternate", 
                duration: 1000,
                delay: 400, 
                iterations: Infinity,
            });   

        refSeven.current.animate(
            animationSeven, {
                easing: "ease-in-out",
                direction: "alternate", 
                duration: 1000,
                delay: 400, 
                iterations: Infinity,
            }); 
            
        refEight.current.animate(            
            animationEight, {
                easing: "ease-in-out",
                direction: "alternate", 
                duration: 1000,
                delay: 400, 
                iterations: Infinity,
            });    

        animatedLines.current.animate(
            animationLine, {
                easing: "ease-in-out",
                direction: "alternate", 
                duration: 600,
                delay: 400, 
                iterations: Infinity,
            });        
       


    })
 

    return (
        <section id="features">
          <div className="feature-row">
            <div className="feature-col">
               <img src={PictureOne} alt="pic-1" ref={refSix} />  
               <h4 data-aos="fade-left"> Learn Anywhere </h4>  
               <p data-aos="fade-left"> Switch between your computer, tablet or mobile devices. </p>
            </div>  

            <div className="feature-col">
               <img src={PictureTwo} alt="pic-2" ref={refSeven} />  
               <h4 data-aos="fade-right"> Expert Teachers </h4>  
               <p data-aos="fade-right"> Learn from industry experts who are passionate about teaching. </p> 
            </div>  

            <div className="feature-col">
               <img src={PictureThree} alt="pic-3"  ref={refEight} />  
               <h4 data-aos="fade-left"> Unlimted Access </h4>  
               <p data-aos="fade-left"> Choose what you'd like to learn from our extensive subscription. </p>
            </div>              
          </div> 

          <div className="feature-btn"> 
              <div className="line animate__animated animate__wobble animate__delay-10s" ref={animatedLines}>
                  <span className="line-1"></span> <br />
                  <span className="line-2"></span> <br />
                  <span className="line-3"></span>
              </div>              
              <button className="commom-btn"> Start Free Trial </button>
         </div>
        </section>                
    )
}


export default Features