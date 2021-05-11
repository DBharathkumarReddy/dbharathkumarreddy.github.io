import React from 'react'
import styles from "./ProjectCard.module.css"
const data=[
    {
        path:"./resources/practo.png",
        description:"A web application used to book an appointment with doctor,video consultation,order medicines and also diagnostics",
        title:"Practo",
        demo:"https://practo.netlify.app/",
        gitlink:"https://github.com/SaravanakumarJN/Practo---Pentagon",
        stacks:["./resources/javascript2.png","./resources/html.png","./resources/css.png","logo192.png","./resources/redux.png","./resources/nodejs.png","./resources/express.png","./resources/mongodb.png"]
    },
    {
        path:"./resources/medium.png",
        description:"Medium is a publishing platform where people can read important, insightful stories on the topics and share ideas with the world",
        title:"Medium",
        demo:"https://medium-web.netlify.app/",
        gitlink:"https://github.com/DBharathkumarReddy/medium-clone",
        stacks:["./resources/javascript2.png","./resources/html.png","./resources/css.png","logo192.png","./resources/redux.png"]
    },
    {
        path:"./resources/mynetdairy.png",
        description:"MyNetDiary is a web application that allows you to track what you eat and how much you exercise.",
        title:"MynetDairy",
        demo:"https://dbharathkumarreddy.github.io/mynetdiary/",
        gitlink:"https://github.com/DBharathkumarReddy/mynetdiary",
        stacks:["./resources/javascript2.png","./resources/html.png","./resources/css.png"]
    },
    {
        path:"./resources/mailtrap.png",
        description:"Mailtrap is a test mail server solution that allows testing email notifications without sending them to the real users of your application.",
        title:"MailTrap",
        demo:"https://suraj588.github.io/Titans-Arsenic/",
        gitlink:"https://github.com/suraj588/Titans-Arsenic",
        stacks:["./resources/javascript2.png","./resources/html.png","./resources/css.png"]
    }
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
                            <div className={styles.stackContainer}>
                                {
                                    item.stacks.map((logo)=>(
                                        <img className={styles.stack} src={logo}></img>
                                    ))
                                }
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

