import React from 'react'
import styles from "./Cards.module.css" 

import slidesInfo from './House';




const Cards = () => {


    return (
        <div className={styles.container}>
        {
          slidesInfo.map( e => (
        
            <div  className={styles.slideContainer} >
                

            <a  >
            <img  className = {styles.img} src={e.src}  alt={e.alt} /> 
            </a>
            
        <div className={styles.slideDesc}  > 
        <span> {e.desc} </span>
         </div>
        
             </div>
        
          ))
        }
        </div>
    )
}

export default Cards




