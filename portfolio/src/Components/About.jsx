import React from 'react'
import styles from "./About.module.css"
export const About = () => {
    return (
        <div className={styles.container}>
        
        <img src="./resources/profilepic2.png" className={styles.profilepic}></img>
            
            <div className={styles.intro}>
                <h1>Donuri Bharath Kumar Reddy</h1>
                <h3>Full Stack Developer</h3>
                <div className={styles.listcontainer}>
                <ul className={styles.list}>
                    <li>
                    <i class="fa fa-map-marker-alt" style={{color:"coral"}}>
                    </i>
                    <strong>    Hyderabad,India</strong>
                    </li>
                    <li>
                    <i class="fa fa-phone-alt" style={{color:"coral"}} ></i>
                    <strong>    9030509003</strong>
                    </li>
                    <li>
                    <i class="fa fa-envelope" style={{color:"coral"}}></i>
                    <strong>     bharath.reddy973@gmail.com</strong>
                    </li>
                </ul>
                <p className={styles.description}>A Passionate aspiring Full Stack Developer skilled in MERN stack and
                loves problem solving. Looking forward to join a company where I shall be able to contribute towards
                    individual and company growth.</p>

                    <a href="" target="blank"><button className={styles.linkbutton}>View Resume </button></a>
                </div>
            </div>
        </div>
    )
}
