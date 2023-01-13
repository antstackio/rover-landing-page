import React, { useEffect, useState } from "react";
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
          </div>
          <div className={styles.roverSubText}>
            <p className={styles.roverNewTag}> backed by <ThemedImage sources={{
              light: useBaseUrl(`img/light_mode_aws.svg`),
              dark: useBaseUrl(`img/dark_mode_aws.svg`),
            }} alt="aws" className={styles.awsTag} /></p>
          </div>
          <div className={styles.videoParent} >
            <div>
              <ThemedImage
                alt="ant_logo"
                sources={{
                  light: useBaseUrl(`img/light_mode.gif`),
                  dark: useBaseUrl(`img/dark_mode.gif`),
                }}
                className={styles.roverVideo}
              />
            </div>
            <div className={styles.videoBlendParent}>
              <ThemedImage
                alt="ant_logo"
                sources={{
                  light: useBaseUrl(`img/RectangleLight.svg`),
                  dark: useBaseUrl(`img/RectangleDark.svg`),
                }}
                className={styles.videoBlend}
              />
            </div>
            <p className={styles.roverVideoText}>Rover is an npm package that generates SAM projects using pre-defined components and modules.</p>
          </div>

          <div className={styles.rovercli}>
            <ThemedImage
              alt="ant_logo"
              sources={{
                light: useBaseUrl(`img/rover_lightmode.gif`),
                dark: useBaseUrl(`img/rover_Darkmode.gif`),
              }}
            />
          </div>
        </span>
      </div>
      <div className={Infostyles.installCommandContainer}>
        {installCommand.map((info) => (
          <InfoContainer key={info.id} data={info} />
        ))}
      </div>
      <VectorImg mirrorImg="false" />
    </>
  );
};

export default HomepageHeader;
