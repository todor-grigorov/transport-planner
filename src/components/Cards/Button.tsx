import styles from '@/styles/Header.module.scss';
import { SyntheticEvent } from 'react';

interface ParentProps {
  text: string;
  loading: boolean;
  visibility: boolean;
  handler: (
    e: SyntheticEvent<HTMLButtonElement, MouseEvent>,
    text: string
  ) => void;
}

type Props = ParentProps;

const Button: React.FC<Props> = ({
  text,
  handler,
  loading,
  visibility,
}): JSX.Element => {
  return (
    <button
      onClick={(e) => handler(e, text)}
      className={styles.button}
      disabled={loading}
      style={{ visibility: visibility ? 'visible' : 'hidden' }}
    >
      {text}
    </button>
  );
};

export default Button;
