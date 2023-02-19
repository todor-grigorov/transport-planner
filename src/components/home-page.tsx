import React from 'react';
import styles from '@/styles/Home.module.scss';
import PlannerForm from '@/components/planner-form';

const HomePage: React.FC = (): JSX.Element => {
  return (
    <div className={styles.main}>
      <h1 data-testid="main-heading" className={styles.home__heading}>
        Start your dream trip today!
      </h1>
      <PlannerForm />
    </div>
  );
};

export default HomePage;
