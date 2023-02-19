import styles from '@/styles/Footer.module.scss';

export const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <p> © 2023 Transport Planner - Todor Grigorov </p>
    </footer>
  );
};
