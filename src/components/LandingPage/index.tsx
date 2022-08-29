import React from 'react'
import Footer1 from '../Footer1'
import HomepageHeader from '../HomepageHeader'
import Info from '../Info'
import Instruction from '../Instruction'
import styles from '../LandingPage/landingStyles.module.css'

const LandingPage = () => {
  return (
    <div className={styles.landingcontainer}>
        <HomepageHeader />
        <Info />
        <Instruction />
        <Footer1 />
    </div>
  )
}

export default LandingPage