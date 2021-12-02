import React from 'react'
import styles from "./About.module.css"

import {IoArrowDownOutline } from "react-icons/io5";




const About = () => {
    return (
        <div  className={styles.aboutContainer}>
           <div className={styles.aboutDescription}> 
           <h4 className={styles.text}> We are an award winning interior design Agency
           </h4>
               </div> 
            
               <button  onClick={() => window.scrollTo({top:600, behavior:"smooth"})} className={styles.button}>View all properties <IoArrowDownOutline/></button>
              
        </div>
    )
}

export default About