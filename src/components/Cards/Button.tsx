import styles from '@/styles/Header.module.scss';
import { SyntheticEvent } from 'react';

interface ParentProps {
  text: string;
  loading: boolean;
  handler: (
    e: SyntheticEvent<HTMLButtonElement, MouseEvent>,
    text: string
  ) => void;
}

type Props = ParentProps;

const Button: React.FC<Props> = ({ text, handler, loading }): JSX.Element => {
  return (
    <button
      onClick={(e) => handler(e, text)}
      className={styles.button}
      disabled={loading}
    >
      {text}
    </button>
  );
};

export default Button;
