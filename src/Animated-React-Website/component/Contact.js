import React from 'react'

import '../css/style.css'

import contact from '../images/contact.png'

export const Contact = () => {
    return (
      <section id="contact">
        <div className="container contact-row">
          <div className="contact-left-col">
            <h1> Sign Up to join our <br /> learning community </h1>  
            <form>
              <input type="text" placeholder="Enter Name" />  
              <input type="email" placeholder="Enter Email" />     
              <input type="password" placeholder="Enter Password" />  

              <div className="btn-box">
               <button className="commom-btn"> Sign Up </button>
               <button className="commom-btn"> Start Free Trial </button>   
              </div>                  
            </form>

             <div className="line">
                <span className="line-1"></span> <br />
                <span className="line-2"></span> <br />
                <span className="line-3"></span>
             </div>  



          </div>   

          <div className="contact-right-col">
            <img src={contact} alt="contact section" />  
          </div>   
        </div>             
      </section>             
    )
}

export default Contact;
