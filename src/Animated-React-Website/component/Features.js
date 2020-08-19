import React from 'react'
import '../css/style.css'

import PictureOne from '../images/pic-1.png'
import PictureTwo from '../images/pic-2.png'
import PictureThree from '../images/pic-3.png'


export const Features = () => {
    return (
        <section id="features">
          <div className="feature-row">
            <div className="feature-col">
               <img src={PictureOne} alt="pic-1" />  
               <h4> Learn Anywhere </h4>  
               <p> Switch between your computer, tablet or mobile devices. </p>
            </div>  

            <div className="feature-col">
               <img src={PictureTwo} alt="pic-2" />  
               <h4> Expert Teachers </h4>  
               <p> Learn from industry experts who are passionate about teaching. </p> 
            </div>  

            <div className="feature-col">
               <img src={PictureThree} alt="pic-3" />  
               <h4> Unlimted Access </h4>  
               <p> Choose what you'd like to learn from our extensive subscription. </p>
            </div>              
          </div> 

          <div className="feature-btn"> 
              <div className="line">
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