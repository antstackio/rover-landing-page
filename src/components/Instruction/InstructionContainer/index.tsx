import React from "react";
import Description from "../../Description";
import styles from "../InstructionContainer/instructionContainer.module.css";

const InstructionContainer = ({ heading, desc, imgSrc, altName, reverse }) => {
  return (
    <div className={styles.instruction}>
      <div
        className={`${
          reverse == "true" ? styles.reverseContainer : styles.container
        }`}
      >
        <h2 className={styles.heading}>{heading}</h2>
        <div
          className={reverse == "true" ? styles.reverse : styles.subContainer}
        >
          <div className={styles.cartoon}>
            <img src={imgSrc} alt={altName} className={styles.cartoonImage} />
          </div>
          <div className={styles.descContainer}>
            {desc.map((data) => (
              <Description key={data.id} data={data} reverse={reverse} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionContainer;
