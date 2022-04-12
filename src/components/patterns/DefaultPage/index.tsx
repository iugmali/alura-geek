import styles from "./DefaultPage.module.scss";
import Header from "./Header";
import Footer from "./Footer";
import React from "react";
interface Props {
  children: React.ReactNode;
}
export default function DefaultPage({children}:Props) {
  return (
    <div className={styles.page}>
      <main className={styles.page__main}>
        <Header />
        <section>{children}</section>
        <Footer />
      </main>
    </div>
  );
}