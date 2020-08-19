import React from 'react'

import '../css/style.css'

import Facebook from '../images/facebook.png'
import Instagram from '../images/instagram.png'
import Twitter from '../images/twitter.png'
import Linkedin from '../images/linkedin.png'

export  const SocialIcons = () => {
    return (
        <div className="social-icons">
            <img src={Facebook}  alt="facebook logo" /> 
            <img src={Instagram} alt="instagram logo" /> 
            <img src={Twitter}   alt="twitter logo"/> 
            <img src={Linkedin}  alt="linkedin logo"/> 
        </div>         
    )
}

export default SocialIcons;