import styles from "./Header.module.scss";
import Logo from "components/Logo";
import SearchBar from "components/SearchBar";
import MenuButton from "components/buttons/MenuButton";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.header__searchWrapper}>
        <Logo />
        <SearchBar />
      </nav>
      <nav>
        <MenuButton title="Login" />
      </nav>
    </header>
  );
}