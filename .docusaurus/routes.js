import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '4ae'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '536'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '8a0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '254'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'ed6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '1f2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'cd2'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'fc1'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '775'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '2da'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '8c1'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e29'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '4ec'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '009'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'dcc'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '03c'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '588'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'b8c'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'a07'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '320'),
    routes: [
      {
        path: '/docs/Components/s3 Lambda',
        component: ComponentCreator('/docs/Components/s3 Lambda', '825'),
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
        component: ComponentCreator('/docs/Modules/Base Module', 'edb'),
        exact: true,
        sidebar: "wikiSidebar"
      },
      {
        path: '/docs/Modules/CRUD',
        component: ComponentCreator('/docs/Modules/CRUD', '684'),
        exact: true,
        sidebar: "wikiSidebar"
      },
      {
        path: '/docs/Modules/Customizable',
        component: ComponentCreator('/docs/Modules/Customizable', '89b'),
        exact: true,
        sidebar: "wikiSidebar"
      },
      {
        path: '/docs/Modules/Email Auth Module',
        component: ComponentCreator('/docs/Modules/Email Auth Module', '7c5'),
        exact: true,
        sidebar: "wikiSidebar"
      },
      {
        path: '/docs/Modules/Test Module',
        component: ComponentCreator('/docs/Modules/Test Module', '6a3'),
        exact: true,
        sidebar: "wikiSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '90e'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
