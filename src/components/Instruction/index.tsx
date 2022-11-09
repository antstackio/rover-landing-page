import React from "react";
import styles from "../../components/Instruction/instructionStyles.module.css";
import Description from "../Description";
import VectorImg from "../VectorImg";
import InstructionContainer from "./InstructionContainer";

const Instruction = () => {
  const descData1 = [
    {
      id: 1,
      title: "Generate SAM Project",
      desc: "Generates new SAM project using  Modules like CRUD and Email auth or create your Custom Modules by selecting Components defined by rover .",
    },
    {
      id: 2,
      title: "Add Components to existing SAM Projects",
      desc: "Add rover components or modules to existing SAM projects ",
    },
  ];

  const descData2 = [
    {
      id: 1,
      title: "Generate CI/CD Pipelines",
      desc: "Generate CI/CD pipelines in SAM projects by giving few deployment details ",
    },
    {
      id: 2,
      title: "Deploy SAM Projets Through CLI",
      desc: "Deploy SAM projects using SAM cli just by few clicks ",
    },
  ];

  return (
    <div>
      <VectorImg mirrorImg="true" />

      <div className={styles.mainContainer}>
        <InstructionContainer
          heading="Create SAM Projects"
          desc={descData1}
          imgSrc="img/cartoon1.png"
          altName="cartoon1"
          reverse="false"
        />
        <VectorImg mirrorImg="true" />
        <InstructionContainer
          heading="Deploy SAM Projets"
          desc={descData2}
          imgSrc="img/cartoon2.png"
          altName="cartoon2"
          reverse="true"
        />
      </div>
    </div>
  );
};

export default Instruction;
