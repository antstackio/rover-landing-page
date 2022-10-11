import React from "react";
import styles from "../HomepageHeader/homepageStyle.module.css";

const HomepageHeader = () => {
  return (
    <div className={styles.homepageContainer}>
      <span className={styles.rover}>
        <div className={styles.roverlogo}>
          {/* <img src='img/rover_logo.png' alt='Rover_logo'/> */}
        </div>
        <div className={styles.roverSubText}>
          <p>Backend Simplified</p>
        </div>
        <div className={styles.rovercli}>
          {/* <ReactPlayer url="img/rover.gif" /> */}
          <img src="img/rover.gif" alt="CLI" />
          {/* <video controls src="img/rover.mp4" typeof="video/mp4">

        </video> */}
        </div>
      </span>
      <div className={styles.vectorImg}>
        <img src="img/Vector 1.png" alt="Vector1" />
        <img src="img/Vector 2.png" alt="Vector1" />
      </div>
    </div>
  );
};

export default HomepageHeader;
