import React, { useEffect, useState } from "react";
import styles from "../HomepageHeader/homepageStyle.module.css";
import VectorImg from "../VectorImg";
import ThemedImage from "@theme/ThemedImage";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { InfoContainer } from "../Info";
import Infostyles from "../../components/Info/InfoStyle.module.css";
// import useThemeContext from '../../../theme/hooks/useThemeContext';
import useGlobalData from '@docusaurus/useGlobalData';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const HomepageHeader = () => {

  const [theme, setTheme] = useState()
  const [formatwebm, setFormatwebm] = useState("img/Rover_AWS_light.webm")
  const [formatmp4, setFormatmp4] = useState("img/Rover_AWS_light.mp4")

  // useEffect(() => {
  //   // setTheme(localStorage.getItem('theme'))
  //   const saved = localStorage.getItem("theme");
  //   setTheme(saved)
  //   console.log("saved", saved)
  //   // console.log("elemet theme", document.querySelector('html'))
  //   const element = document.getElementsByTagName('data-theme');
  //   console.log("hrml", element)

  // });

  // useEffect(() => {
  //   console.log("local.theme", localStorage.theme)
  // })

  // console.log("theme", theme)

  // function storageEventHandler() {
  //   console.log("hi from storageEventHandler")
  //   setTheme(localStorage.getItem('theme') || null)
  // }
  let videothemeWebm = ""
  let videothemeMp4 = ""
  useEffect(() => {
    let element = document.getElementsByClassName(
      "plugin-pages plugin-id-default"
    );
    console.log(element[0].getAttribute("data-theme"), "1");
    let buttonTheme = document.getElementsByClassName(
      "clean-btn toggleButton_node_modules-@docusaurus-theme-classic-lib-theme-ColorModeToggle-styles-module"
    );
    buttonTheme[0].addEventListener("click", () => {
      console.log(element[0].getAttribute("data-theme"), "2");
      setTheme(element[0].getAttribute("data-theme"))
      console.log(theme, "theme")
    });
    if (theme === "dark") {
      setFormatwebm("img/Rover_AWS_dark.webm");
      setFormatmp4("img/Rover_AWS_dark.mp4")
    }
    console.log("video theme", formatmp4, formatwebm)
  });
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
            <p className={styles.roverNewTag}> backend by <ThemedImage sources={{
              light: useBaseUrl(`img/light_mode_aws.svg`),
              dark: useBaseUrl(`img/dark_mode_aws.svg`),
            }} alt="aws" className={styles.awsTag} /></p>
          </div>
          <div className={styles.videoParent} >
            {/* <div className={theme === "light" ? styles.videoTag : styles.videoTagDark}> */}
            {/* {theme === "light" ? */}
            <div>
              <video autoPlay loop muted playsInline className={styles.roverVideo}>
                <source src={formatwebm} type="video/webm" />
                <source src={formatmp4} type='video/mp4; codecs="hvc1"' />
              </video>
            </div>
            {/* : */}
            {/* <div>
                  <video autoPlay loop muted playsInline className={styles.roverVideo}>
                    <source src={videothemeWebm} type="video/webm" />
                    <source src={videothemeMp4} type='video/mp4; codecs="hvc1"' />
                  </video>
                </div> */}
            {/* } */}
            {/* </div> */}
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
