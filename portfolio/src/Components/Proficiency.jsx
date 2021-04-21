import React from 'react'
import styles from "./Proficiency.module.css"
const data=[
    {
        path:"./resources/reactapps.png",
        name:"React Apps",
        content:"React | Hooks API | Redux | React Router DOM"
    },
    {
        path:"./resources/frontend.png",
        name:"Front End",
        content:"Node | Express | MongoDB"
    },
    {
        path:"./resources/backend.png",
        name:"Back End",
        content:"HTML | CSS | JavaScript "
    },
    {
        path:"./resources/dsandalgo.png",
        name:"Data Structures & Algorithms",
        content:"Binary Search | Recursion | Linked Lists "
    }
]
const proficiency = () => {
    return (
        <div className={styles.proficiencyMain}>
            <h1>Proficiencies</h1>
            <div className={styles.proficiencyBox}>
                {
                    data.map(item=>(
                        <div className={styles.proficiency}>
                            <img src={item.path}></img>
                            <h3>{item.name}</h3>
                            <p>{item.content}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default proficiency
