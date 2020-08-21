import React, { useLayoutEffect, useRef }  from 'react'

import '../css/style.css'
import offer from '../images/offer.png'

import AOS from 'aos';
import 'aos/dist/aos.css'; 

import 'animate.css'

export const Offer = () => {

    AOS.init({
        offset: 180,
        duration: 1200,
        ease: "ease-in-out",  
    });

    const refThree = useRef(null);
    const animatedLines = useRef(null);

    useLayoutEffect(() => {
        var animateRefThree = [
            { transform: 'translateX(-40%)' },  
          ];     

          var animationLine = [
            { transform: 'translateY(-20%)' }  
          ];  
                      
         
          
        refThree.current.animate(
            animateRefThree, {
                easing: "ease-in-out",
                direction: "alternate", 
                duration: 1000,
                delay: 400, 
                iterations: Infinity
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
      <section id="offer">
        <div className="about-left-col" ref={animatedLines}>
           <img src={offer} alt='offer section' />
        </div>

        <div className="about-right-col">
           <div className="about-text">
               <h1 ref={refThree}> Limitless learning,<br/> limitless possibilities </h1>
               <span className="square"></span> 
               <p data-aos="fade-right">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                roots in a piece of classical Latin literature from 45 BC, making it over
                2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College
                in Virginia.                   
               </p>

               <button className="commom-btn" data-aos="fade-right"> Start Free Trial </button>

              
              <div>
                <span className="line-1"></span> <br />
                <span className="line-2"></span> <br />
                <span className="line-3"></span>
              </div>
              
               
             
           </div> 
        </div>

    </section>     
    )
}


export default Offer;