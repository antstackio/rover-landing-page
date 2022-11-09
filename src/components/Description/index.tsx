import React from "react";
import styles from "../../components/Description/description.module.css";

const Description = (props) => {
  const { key, data, reverse } = props;
  return (
    <div className={reverse == "false" ? styles.descMain : styles.descMain2}>
      <div className={styles.descBody}>
        <h2>{data.title}</h2>
        <p>{data.desc}</p>
      </div>
    </div>
  );
};

export default Description;
