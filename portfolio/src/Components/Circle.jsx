import React from 'react'
import styles from "./Circle.module.css"
const data=[
    {
        count:"1200+",
        type:"Hours",
        tag:"of Full Stack Coding"
    },
    {
        count:"100+",
        type:"Hours",
        tag:"Soft Skills Training"
    },
    {
        count:"230+",
        type:"Git",
        tag:"Commits"
    },
    {
        count:"12+",
        type:"Projects",
        tag:"frontend & backend"
    }
]
const Circle = () => {
    return (
        <div className={styles.circleContainer}>
            {
                data.map(item=>(
                    <div className={styles.circleBox}>
                        <div className={styles.circle}><h2 className={styles.count}>{item.count}</h2></div>
                        <div className={styles.tags}>
                            <h2>{item.type}</h2>
                            <p>{item.tag}</p>
                        </div>
                        
                    </div>
                ))
            }
        </div>
    )
}

export default Circle
