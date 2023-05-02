import React from "react";
import styles from "./style/Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>Burger Matter</h1>
    </header>
  );
}

export default Header;
