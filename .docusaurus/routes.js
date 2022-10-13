import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'b5a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'bcd'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'b8b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '452'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '9f3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '723'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '63b'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b4d'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'db7'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '2e8'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '77a'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'c79'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '2bd'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'bdd'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '9bd'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '093'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '7e2'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '540'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '15f'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '147'),
    routes: [
      {
        path: '/docs/Components/CRUD',
        component: ComponentCreator('/docs/Components/CRUD', 'e26'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Components/S3_Lambda',
        component: ComponentCreator('/docs/Components/S3_Lambda', '438'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Modules/Base Module',
        component: ComponentCreator('/docs/Modules/Base Module', '978'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Modules/CRUD',
        component: ComponentCreator('/docs/Modules/CRUD', 'ff1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Modules/Customizable',
        component: ComponentCreator('/docs/Modules/Customizable', '09c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Modules/Email Auth Module',
        component: ComponentCreator('/docs/Modules/Email Auth Module', '5ab'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Modules/Test Module',
        component: ComponentCreator('/docs/Modules/Test Module', 'bbe'),
        exact: true
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'a87'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
