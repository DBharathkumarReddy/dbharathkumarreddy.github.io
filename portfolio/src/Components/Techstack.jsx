import React from 'react'
import styles from "./Techstack.module.css"
const data=[
    {
        path:"./resources/javascript2.png",
        name:"JAVASCRIPT"
    },
    {
        path:"./resources/html.png",
        name:"HTML"
    },
    {
        path:"./resources/css.png",
        name:"CSS"
    },
    {
        path:"logo192.png",
        name:"REACT JS"
    },
    {
        path:"./resources/redux.png",
        name:"REDUX"
    },
    {
        path:"./resources/nodejs.png",
        name:"NODE JS"
    },
    {
        path:"./resources/express.png",
        name:"EXPRESS"
    },
    {
        path:"./resources/mongodb.png",
        name:"MONGO DB"
    }
    
]




const Techstack = () => {
    return (
        <div className={styles.mainbox}>
            <h1 className={styles.stackhead}>Tech Stack</h1>
            <div className={styles.stackContainer}>
                
                {data.map(item=>(
                    <div className={styles.stack}>
                        
                        <img className={styles.logo} src={item.path}></img>
                        <h5 className={styles.title}>{item.name}</h5>
                    </div>
                ))}
            </div>
        </div>
    )
}

export{Techstack}
