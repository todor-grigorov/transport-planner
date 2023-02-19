import React from 'react';
import styles from '@/styles/Home.module.scss';

const HomePage: React.FC = (): JSX.Element => {
  return (
    <div className={styles.main}>
      <h1 className={styles.home__heading}>Start your dream trip today!</h1>
    </div>
  );
};

export default HomePage;
