import React from "react";
import styles from "../../components/Footer1/footer1.module.css";
import ThemedImage from "@theme/ThemedImage";
import useBaseUrl from "@docusaurus/useBaseUrl";

const Footer1 = () => {
  return (
    <div className={styles.footer1Container}>
      <div className={styles.footer1Body}>
        <p>
          Made with love <span style={{ color: "red" }}>♥️</span> by
        </p>
        <span className={styles.antLogoImg}>
          <ThemedImage
            alt="ant_logo"
            sources={{
              light: useBaseUrl(`img/ant_logo.svg`),
              dark: useBaseUrl(`img/ant_dark.svg`),
            }}
          />
          <ThemedImage
            alt="ant_logo"
            sources={{
              light: useBaseUrl(`img/ant_name.svg`),
              dark: useBaseUrl(`img/ant_name_dark.svg`),
            }}
          />
        </span>
        <p>© AntStack Technologies Pvt. Ltd. 2022. Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer1;
