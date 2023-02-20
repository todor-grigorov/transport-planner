import React from 'react';
import styles from '@/styles/AboutUs.module.scss';

const AboutUsPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Trip Planner App.</h2>
      <p>This app is created using Next.JS, Typescript and Material UI</p>
      <p>Testing libraries: Jest and Cypress</p>
      <p>If you like the app, you can have a look at my other apps at: </p>
      <a href={'https://todor-grigorov.tech'} target={'_blank'}>
        Portfolio
      </a>
    </div>
  );
};

export default AboutUsPage;
