import React from 'react'
import '../css/style.css'

import 'animate.css'

export const Home = () => {
    return (
        <div>
          <section id="header">
            <div className="container">
              <div className="header-text">
                <h1 className="animate__animated
                               animate__fadeInLeft
                               animate__delay-1s"> The purpose is to <br /> teach, bring learning to people </h1>  
                <span className="square animate__animated animate__fadeInLeft animate__delay-2s"></span> 
                <p className="animate__animated animate__lightSpeedInLeft animate__delay-3s">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed efficitur mauris vel rhoncus maximus. Maecenas pretium nisl nulla, ac placerat metus rhoncus et.
                  Aliquam tincidunt venenatis enim, ut viverra sem sodales eu. Donec blandit faucibus enim tincidunt maximus. Ut mollis
                </p>
                <button className="commom-btn animate__animated animate__jackInTheBox animate__delay-4s"> Read More </button>

                 <div className="line  animate__animated animate__swing animate__delay-5s">
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