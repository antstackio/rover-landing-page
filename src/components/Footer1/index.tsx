import React from 'react'
import styles from '../../components/Footer1/footer1.module.css'

const Footer1 = () => {
  return (
    <div className={styles.footer1Container}>
        <div className={styles.footer1Body}>
            <p>Made with love <span style={{color:"red"}}>♥️</span> by</p>
            <span className={styles.antLogoImg}>
                <img src="img/ant_logo.png" />
                <img src="img/ant_name.png" />
            </span>
            <p>© AntStack Technologies Pvt. Ltd. 2022. Privacy Policy</p>
        </div>
    </div>
  )
}

export default Footer1