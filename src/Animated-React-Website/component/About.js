import React from 'react'
import '../css/style.css'

import about from '../images/about.png'

export const About = () => {
    return (
        <section id="about">
            <div className="about-left-col">
               <img src={about} alt="about section" />
            </div>

            <div className="about-right-col">
               <div className="about-text">
                   <h1> About Us </h1>
                   <span className="square"></span> 
                   <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan
                    urna et sagittis semper. Nam id erat ultricies, consequat arcu sit amet, semper felis.
                    Sed congue erat sit amet lorem mattis, sed elementum ligula aliquet. Cras molestie, est non accumsan gravida, justo leo semper sapien, id efficitur odio purus at neque. Sed vehicula dictum tortor sit amet bibendum. In fermentum pharetra justo, in rhoncus eros convallis commodo. Integer bibendum viverra nunc
                   </p> <br /> <br />

                   <div className="line">
                    <span className="line-1"></span> <br />
                    <span className="line-2"></span> <br />
                    <span className="line-3"></span>
                   </div>

                    <h2>
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