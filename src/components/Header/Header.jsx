import React from "react";
import { Link } from "react-router-dom";
import HeaderLink from "../HeaderLink/HeaderLink";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.cabecalho}>
      <Link to="./">
        <img className={styles.cabecalho__logo}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Valorant_logo_-_pink_color_version.svg/2560px-Valorant_logo_-_pink_color_version.svg.png"
          alt="Logo em vermelho do Jogo Valorant"
          width="130"
          height="80"
        />
      </Link>
      <nav>
        <HeaderLink url="./">
            Home
        </HeaderLink>
        <HeaderLink url="./Favoritos">
            Favoritos
        </HeaderLink>
      </nav>
    </header>
  );
}
