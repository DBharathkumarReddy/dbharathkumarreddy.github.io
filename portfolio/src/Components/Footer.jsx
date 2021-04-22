import React from 'react'
import styles from "./Footer.module.css"
const Footer = () => {
    return (
        <div className={styles.footer}>
           <h2>Contact Me</h2>
           <div className={styles.contact}>
               <a href="https://github.com/DBharathkumarReddy" target="blank"><img className={styles.giticon} src="./resources/github.png"></img></a>
               <a href="https://www.linkedin.com/in/donuri-bharath-kumar-reddy-b9aa6620b/" target="blank"><img className={styles.linkicon} src="./resources/linkedin3.png"></img></a>
           </div>
        </div>
    )
}

export default Footer
