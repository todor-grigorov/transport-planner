import styles from '@/styles/Header.module.scss';
import { SyntheticEvent } from 'react';

interface ParentProps {
  text: string;
  handler: (
    e: SyntheticEvent<HTMLButtonElement, MouseEvent>,
    text: string
  ) => void;
}

type Props = ParentProps;

const Button: React.FC<Props> = ({ text, handler }): JSX.Element => {
  return (
    <button onClick={(e) => handler(e, text)} className={styles.button}>
      {text}
    </button>
  );
};

export default Button;
