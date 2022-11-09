import React from "react";
import styles from "../VectorImg/vectorImg.module.css";

const VectorImg = ({ mirrorImg }) => {
  return (
    <div
      className={mirrorImg == "false" ? styles.vectorImg : styles.vectorMirror}
    >
      <img src="img/Vector 1.png" alt="Vector1" />
      <img src="img/Vector 2.png" alt="Vector1" />
    </div>
  );
};

export default VectorImg;
