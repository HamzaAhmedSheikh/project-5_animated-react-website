import React, { useLayoutEffect, useRef } from 'react'
import '../css/style.css'

import 'animate.css'
// import useWebAnimations from "@wellyshen/use-web-animations";

export const Home = () => {

  const frameOne = useRef(null);
  const frameTwo = useRef(null);

  useLayoutEffect(() => {
    var spriteFrames = [
      { transform: 'translateX(40%)' },  
    ];

    var sprite = [
      { transform: 'translateY(90%)' },  
    ];

    // var thridFrame = [
    //   { transform: 'translateY(90%)' },  
    // ];

    var one = frameOne.current.animate(
      spriteFrames, {
        easing: "ease-in-out",
        direction: "alternate", 
        duration: 1000,
        delay: 400, 
        iterations: Infinity
      });

    var two = frameTwo.current.animate(
      sprite, {
        easing: "ease-in-out",
        direction: "alternate", 
        duration: 600,
        delay: 400, 
        iterations: Infinity,
    }); 
    
    // var three = frameTwo.current.animate(
    //   thridFrame, {
    //     easing: "ease-in-out",
    //     direction: "alternate", 
    //     duration: 600,
    //     delay: 400, 
    //     iterations: Infinity,
    // });  


      console.log(one, two, );
  })
  

  // const { ref } = useWebAnimations({
  //   keyframes: {
  //     transform: ["translate(60px)"],            
  //   },

  //   timing: {
  //     delay: 400, 
  //     duration: 1000, 
  //     iterations: Infinity,
  //     direction: "alternate", 
  //     easing: "ease-in-out", 
  //   }
    

  // })    


    return (
        <div>
          <section id="header"> 
            <div className="container">
              <div className="header-text">
                <h1 ref={frameOne}> The purpose is to <br /> teach, bring learning to people </h1>  
                <span className="square"></span> 
                <p className="animate__animated animate__lightSpeedInLeft animate__delay-3s">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed efficitur mauris vel rhoncus maximus. Maecenas pretium nisl nulla, ac placerat metus rhoncus et.
                  Aliquam tincidunt venenatis enim, ut viverra sem sodales eu. Donec blandit faucibus enim tincidunt maximus. Ut mollis
                </p>
                <button className="commom-btn animate__animated animate__jackInTheBox animate__delay-4s"> Read More  </button>

                 <div className="line  animate__animated animate__wobble animate__delay-5s" ref={frameTwo}>
                    <span className="line-1"></span> <br />
                    <span className="line-2"></span> <br />
                    <span className="line-3"></span>
                 </div>

              </div>  
            </div>
          </section>
        </div>               
    )
}


export default Home;