import React from "react";
import styles from "./Footer.module.scss";
import { BiHeart } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className={styles.rodape}>
      <h2 className={styles.rodape__titulo}>
        Feito com <BiHeart /> por Ágatha Magnus
      </h2>
    </footer>
  );
}
