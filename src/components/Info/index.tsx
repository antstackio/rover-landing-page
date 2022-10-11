import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styles from "../../components/Info/InfoStyle.module.css";
import ThemedImage from "@theme/ThemedImage";
import useBaseUrl from "@docusaurus/useBaseUrl";

export const InfoContainer = (props) => {
  const { id, data } = props;
  const [copyText1, setCopyText1] = useState("$ rover init");
  const [copyText2, setCopyText2] = useState("$ rover deploy");

  return (
    <a className={styles.infoContainer}>
      <span className={styles.infoContent}>
        {/* <div className={styles.infoImages}>
          <img
            className={styles.infoIcon}
            src={data.image}
            alt={data.altText}
          />
        </div> */}
        <div className={styles.infoImages}>
          {/* <img src={data.image} alt={data.altText} /> */}
          <ThemedImage
            alt={data.altText}
            sources={{
              light: useBaseUrl(`${data.image}`),
              dark: useBaseUrl(`${data.imageDark}`),
            }}
          />
        </div>
        <div className={styles.subInfo}>
          <h1>{data.title}</h1>
          <p>{data.subText}</p>
          <div className={styles.copyContainer}>
            <p>{data.copyText}</p>
            <CopyToClipboard text={data.copyText}>
              <button onClick={() => alert("Text Copied to Clipboard")}>
                <img src="img/copy_icon.png" alt="Copy_Icon" />
              </button>
            </CopyToClipboard>
          </div>
        </div>
      </span>
    </a>
  );
};

const Info = () => {
  const infoData = [
    {
      id: 1,
      title: "Create SAM Projects",
      subText:
        "`rover init` generates new SAM projects  or add components to existing project.",
      image: "img/edit_icon2.svg",
      imageDark: "img/edit_dark.svg",
      altText: "Edit Icon",
      copyText: "rover init",
    },
    {
      id: 2,
      title: "Deploy SAM Projects",
      subText: "`rover deploy` generates CI/CD pipeline in SAM or deploys through SAM CLI.",
      image: "img/cloud_icon2.svg",
      imageDark: "img/cloud_dark.svg",
      altText: "Cloud Icon",
      copyText: "rover deploy",
    },
  ];
  // const [copyText1,setCopyText1]=useState('$ rover init');
  // const [copyText2,setCopyText2]=useState('$ rover deploy');
  return (
    <div className={styles.mainContainer}>
      {infoData.map((info) => (
        <InfoContainer key={info.id} data={info} />
      ))}

      {/* <a className={styles.infoContainer}>
            <span className={styles.infoContent}>
                <span className={styles.cloudIcon}> */}
      {/* <img className={styles.infoIcon} src='img/cloud_icon2.png' alt="Edit_Icon"/> */}
      {/* </span>
                <div className={styles.subInfo}>
                    <h1>Deploy SAM Projects </h1>
                    <p>Deploying SAM projetcs to AWS through CLI and CI/CD Pipeline</p>
                    <div className={styles.copyContainer}>
                        <p>{copyText2}</p>
                        <CopyToClipboard text={copyText2}>
                        <button onClick={()=>alert('Text Copied to Clipboard')}>
                            <img src="img/copy_icon.png" alt="Copy_Icon"/>
                        </button>
                        </CopyToClipboard>
                    </div>
                </div>
            </span>
        </a> */}
    </div>
  );
};

export default Info;
