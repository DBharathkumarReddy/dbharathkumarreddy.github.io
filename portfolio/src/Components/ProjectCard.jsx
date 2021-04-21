import React from 'react'
import styles from "./ProjectCard.module.css"
const data=[
    {
        path:"./resources/practo.png",
        description:"A web application used to book an appointment with doctor,video consultation,order medicines and also diagnostics",
        title:"Practo",
        demo:"",
        gitlink:"https://github.com/SaravanakumarJN/Practo---Pentagon"
    },
    {
        path:"./resources/medium.png",
        description:"Medium is a publishing platform where people can read important, insightful stories on the topics and share ideas with the world",
        title:"Medium",
        demo:"",
        gitlink:"https://github.com/himrd95/Foxtrot"
    },
    {
        path:"./resources/mynetdairy.png",
        description:"MyNetDiary is a web application that allows you to track what you eat and how much you exercise.",
        title:"MynetDairy",
        demo:"",
        gitlink:"https://github.com/AbhinavRajSing/magnesium"
    },
    {
        path:"./resources/mailtrap.png",
        description:"Mailtrap is a test mail server solution that allows testing email notifications without sending them to the real users of your application.",
        title:"MailTrap",
        demo:"",
        gitlink:"https://github.com/suraj588/Titans-Arsenic"
    },
]
const ProjectCard = (props) => {
    const{path,title,description,demo,gitlinnk}=props
    return (
        <div className={styles.projectsBox}>
            <h1>Projects</h1>
        
            <div className={styles.projectContainer}>
                {
                    data.map(item=>(
                        <div className={styles.projectCard}>
                            <img src={item.path}></img>
                            <div className={styles.info}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                            
                            <div className={styles.buttonsBox}>
                                <a href={item.demo} target="blank"><button className={styles.linkbutton}>Demo</button></a>
                                <a href={item.gitlink} target="blank"><button className={styles.linkbutton}>GitHub Link</button></a>
                            </div>
                        
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProjectCard

