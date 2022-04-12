import styles from './MenuButton.module.scss';

interface Props {
  title: string;
}
export default function MenuButton({title}:Props) {
  return (
    <button className={styles.menuButton}>
      {title}
    </button>
  );
}