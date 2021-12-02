import React from 'react'
import styles from "./Navbar.module.css"

const NavBar = () => {

    return (
        <nav  className={styles.navbar} >
             <div  className={styles.navBarLogo} >
               <img src={"https://www.aleia.io/wp-content/uploads/2020/07/Logo-Aleia-N.png"} alt="img not found" className={styles.img}/>
            </div>
            <div  className={styles.navBarLogo}>
                About us
            </div>
            <div  className={styles.navBarLogo} >
            Proyects
            </div>
            <div   className={styles.navBarLogo} >
            Career
            </div>
            <div  className={styles.navBarLogo} >
            Contacts
            </div>
        </nav>
    )
}

export default NavBar
