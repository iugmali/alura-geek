import styles from './SearchBar.module.scss';

export default function SearchBar() {
  return (
    <span className={styles.seachBar}>
      <input type="text" className={styles.seachBar__input} placeholder="O que deseja encontrar?" />
    </span>
  );
}