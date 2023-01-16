import React, { useEffect } from "react";
import Footer1 from "../Footer1";
import HomepageHeader from "../HomepageHeader";
import Info from "../Info";
import Instruction from "../Instruction";
import styles from "../LandingPage/landingStyles.module.css";

const LandingPage = () => {
  return (
    <div className={styles.mainLanding}>
      <div className={styles.landingcontainer}>
        <div className={styles.homepage}>
          <HomepageHeader />
        </div>
        <Info />
        <Instruction />
        <Footer1 />
      </div>
    </div>
  );
};

export default LandingPage;
