import {footer,icon} from './footer.module.css'
import React from 'react'
import { FaFacebookF,FaInstagram,FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
       
        <div className={footer}> <span>©2023 Copyright: Mahmoud Ahmed </span> 
        <div className={icon}><FaFacebookF/><FaInstagram/><FaLinkedin/></div> 
        </div>
     
    )
}

export default Footer;