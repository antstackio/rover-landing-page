import React from "react";
import styles from "../HomepageHeader/homepageStyle.module.css";
import VectorImg from "../VectorImg";
import ThemedImage from "@theme/ThemedImage";
import useBaseUrl from "@docusaurus/useBaseUrl";

const HomepageHeader = () => {
  return (
    <>
      <div className={styles.homepageContainer}>
        <span className={styles.rover}>
          <div className={styles.roverlogo}>
            {/* <img src='img/rover_logo.png' alt='Rover_logo'/> */}
          </div>
          <div className={styles.roverSubText}>
            <p>Backend Simplified</p>
          </div>
          <div className={styles.rovercli}>
            <ThemedImage
              alt="ant_logo"
              sources={{
                light: useBaseUrl(`img/rover_lightmode.gif`),
                dark: useBaseUrl(`img/rover_Darkmode.gif`),
              }}
            />
            {/* <img src="img/rover_lightmode.gif" alt="CLI" /> */}
          </div>
        </span>
      </div>
      <VectorImg mirrorImg="false" />
    </>
  );
};

export default HomepageHeader;
