import { useState } from 'react';
import Link from 'next/link';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import styles from '@/styles/Header.module.scss';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggler = () => setMenuOpen((p) => !p);

  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <div>
          <span className={styles.logo}>Transport Planner</span>
        </div>
        <div>
          <nav
            className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}
          >
            <Link className={styles.nav__item} href={'/'} passHref>
              Home
            </Link>
            <Link className={styles.nav__item} href={'/about-us'} passHref>
              About us
            </Link>
          </nav>
        </div>
        <div>
          <button className={styles.header__toggler} onClick={menuToggler}>
            {!menuOpen ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}
          </button>
        </div>
      </div>
    </div>
  );
};

// const Button = () => {
//   return <button className={styles.button}>Click me</button>;
// };
