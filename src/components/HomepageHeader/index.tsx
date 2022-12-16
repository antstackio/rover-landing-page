import React from "react";
import styles from "../HomepageHeader/homepageStyle.module.css";
import VectorImg from "../VectorImg";
import ThemedImage from "@theme/ThemedImage";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { InfoContainer } from "../Info";
import Infostyles from "../../components/Info/InfoStyle.module.css";

const HomepageHeader = () => {
  const installCommand = [
    {
      id: 1,
      title: "Install Rover",
      subText: "To install Rover just copy this link and paste in your CLI",
      image: "img/install_cloud.svg",
      imageDark: "img/install_cloud_dark.svg",
      altText: "Cloud Icon",
      copyText: "npm install @rover-tools/cli -g",
    },
  ];
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
      <div className={Infostyles.installCommandContainer}>
        {installCommand.map((info) => (
          <InfoContainer key={info.id} data={info}  />
        ))}
      </div>
      <VectorImg mirrorImg="false" />
    </>
  );
};

export default HomepageHeader;
