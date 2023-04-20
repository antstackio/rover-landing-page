import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import LandingPage from '../components/LandingPage';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.banner)}>
      <div className="container">
        {/* <h1 className="hero__title">{siteConfig.title}</h1>
         */}
         <img src="img/roverForBright.png" alt="My Logo" />
        <p className="bannerText">Backend Simplified</p>
        {/* <img src ="" */}
       
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Rover is an npm package that generates SAM projects using pre-defined components and modules <head/>">
      {/* <HomepageHeader /> */}
      <main>
        {/* <HomepageFeatures /> */}
        <LandingPage />
      </main>
    </Layout>
  );
}
