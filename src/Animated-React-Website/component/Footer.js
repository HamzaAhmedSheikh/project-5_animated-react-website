import React from 'react'

import Logo from '../images/logo.png'

import '../css/style.css'

export const Footer = () => {
    return (
       <section id="footer">
         <div className="container footer-row">
            <hr /> 
          <div className="footer-left-col">
           <div className="footer-links">
            <div className="link-title">
               <h4> Product </h4>  
               <small> Our Plan </small> <br /> 
               <small> Free Trial </small> 
            </div>   

            <div className="link-title">
               <h4> About Us </h4>  
               <small> Request Demo  </small> <br /> 
               <small> FAQs </small> 
            </div> 

            <div className="link-title">
               <h4> Support </h4>  
               <small> Features </small> <br /> 
               <small> Contact Us </small> 
            </div> 

            <div className="link-title">
               <h4> Explore </h4>  
               <small> Find a nonprofit </small> <br /> 
               <small> Coporate Solution </small> 
            </div> 
             
           </div>               
          </div> 

          <div className="footer-right-col">
            <div className="footer-info">
              <div className="copyright-text">
                <small> support@Xypo.com </small> <br /> 
                <small> copyright 2020 Xypo </small>   
              </div> 

              <div className="footer-logo">
                <img src={Logo} alt='logo' />  
                <button className="commom-btn"> English </button>
              </div>  
            </div>              
          </div>
         </div>  
       </section>          
    )
}

export default Footer;