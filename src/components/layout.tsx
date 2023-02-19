import React, { ReactNode } from 'react';
// import { Footer } from './footer';
import { Header } from './header';

type Props = {
  children: ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/*<Footer />*/}
    </>
  );
};

export default MainLayout;
