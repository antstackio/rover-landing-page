/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: "autogenerated", dirName: "." }],
  // wikiSidebar: [{ type: "autogenerated", dirName: "." }],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
  tutorialSidebar: [
    {
      type: "doc",
      id: "intro", // document ID
      label: "Quickstart",
      className: "quickStyle",
    },
    {
      type: "category",
      label: "Components",
      items: [
        "Components/S3_Lambda",
        "Components/CRUD"
      ],
      className: "componentStyle",
    },
    {
      type: "category",
      label: "Modules",
      items: [
        
        "Modules/Base Module",
        "Modules/Email Auth Module",
        "Modules/CRUD",
        "Modules/Customizable",
       
        
      ],
      className: "moduleStyle",
    },
    {
      type: "category",
      label: "Code Walk Through",
      items: [
        "CodeWalkThrough/Introduction",
        //"Code Walk Through/Rover CLI",
        "CodeWalkThrough/Rover Engine",
        "CodeWalkThrough/Code Walk Through",
      ],
      className: "contribution",
    },
    {
      type: "category",
      label: "Contribution Gudelines",
      items: [
        
        "Contribution/Introduction",
        "Contribution/Rover Set Up",
        "Contribution/Define new Components or Module",
        "Contribution/Add new AWS service",
        "Contribution/Bug Report or Feature request",
        "Contribution/Bug Fix",
        "Contribution/Code of Conduct",
       
        
      ],
      className: "contribution",
    },

  ]
};

module.exports = sidebars;
