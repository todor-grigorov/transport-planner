import styles from '@/styles/Header.module.scss';
import { SyntheticEvent } from 'react';

interface ParentProps {
  text: string;
  handler: (e: SyntheticEvent<HTMLButtonElement, MouseEvent>) => void;
}

type Props = ParentProps;

const Button: React.FC<Props> = ({ text, handler }): JSX.Element => {
  return (
    <button onClick={handler} className={styles.button}>
      {text}
    </button>
  );
};

export default Button;
