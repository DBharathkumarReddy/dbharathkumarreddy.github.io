import React from 'react'
import styles from "./Proficiency.module.css"
const data=[
    {
        path:"./resources/reactapps.png",
        name:"React Apps",
        
    },
    {
        path:"./resources/frontend.png",
        name:"Front End",
        
    },
    {
        path:"./resources/backend.png",
        name:"Back End",
        
    },
    {
        path:"./resources/dsandalgo.png",
        name:"Data Structures & Algorithms",
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
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default proficiency
