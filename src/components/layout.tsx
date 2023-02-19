import React, { ReactNode } from 'react';
import { Footer } from './footer';
import { Header } from './header';
import styles from '@/styles/Layout.module.scss';

type Props = {
  children: ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }: Props): JSX.Element => {
  return (
    <div className={styles.main}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
