import React from 'react'

import '../css/style.css'

import offer from '../images/offer.png'

export const Offer = () => {
    return (
      <section id="offer">
        <div className="about-left-col">
           <img src={offer} alt='offer section' />
        </div>

        <div className="about-right-col">
           <div className="about-text">
               <h1> Limitless learning,<br/> limitless possibilities </h1>
               <span className="square"></span> 
               <p>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                roots in a piece of classical Latin literature from 45 BC, making it over
                2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College
                in Virginia.                   
               </p>

               <button className="commom-btn"> Start Free Trial </button>

               <div className="line">
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