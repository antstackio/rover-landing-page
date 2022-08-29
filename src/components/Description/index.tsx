import React from 'react'
import styles from '../../components/Description/description.module.css'

const Description = (props) => {
    const {key,data}=props
  return (
    <div className={styles.descMain}>
        <div className={styles.descBody}>
            <h2>{data.title}</h2>
            <p>{data.desc}</p>
        </div>
    </div>
  )
}

export default Description