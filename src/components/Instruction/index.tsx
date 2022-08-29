import React from "react";
import styles from "../../components/Instruction/instructionStyles.module.css";
import Description from "../Description";

const Instruction = () => {
  const descData1 = [
    {
      id: 1,
      title: "Customize SAM Project",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in dui ac dui fringilla convallis a at massa. ",
    },
    {
      id: 2,
      title: "Add Existing SAM Projects",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in dui ac dui fringilla convallis a at massa. ",
    },
  ];

  const descData2 = [
    {
      id: 1,
      title: "Deploy SAM Projets Through CI/CD Pipelines",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in dui ac dui fringilla convallis a at massa. ",
    },
    {
      id: 2,
      title: "Deploy SAM Projets Through CLI",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in dui ac dui fringilla convallis a at massa. ",
    },
  ];

  return (
    <div>
      <div className={styles.vectorImg}>
        <img src="img/Vector3.png" alt="Vector1" />
        <img src="img/Vector4.png" alt="Vector1" />
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.container1}>
          <h2>Create SAM Projects</h2>
          <div className={styles.subContainer}>
            <img
              src="img/cartoon1.png"
              alt="Cartoon Image"
              className={styles.cartoonImage}
            />
            <span className={styles.lineImg}>
              <img src="img/Line1.png" alt="Line1" />
            </span>
            <span className={styles.lineImg2}>
              <img src="img/Line 2.png" alt="Line1" />
            </span>
            <div className={styles.descContainer}>
              {descData1.map((data) => (
                <Description key={data.id} data={data} />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.vectorImg}>
          <img src="img/Vector 1.png" alt="Vector1" />
          <img src="img/Vector 2.png" alt="Vector1" />
        </div>
        <div className={styles.container2}>
          <h2>Deploy SAM Projets</h2>
          <div className={styles.subContainer}>
            {/* <span className={styles.lineImg}>
                        <img src='img/Line1.png' alt='Line1'/>
                    </span>
                    <span className={styles.lineImg2}>
                        <img src='img/Line 2.png' alt='Line1'/>
                    </span> */}
            <div className={styles.descContainer}>
              {descData2.map((data) => (
                <Description key={data.id} data={data} />
              ))}
            </div>
            <img
              src="img/cartoon2.png"
              alt="Cartoon Image2"
              className={styles.cartoonImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instruction;
