import React from "react";
import styles from "./Card.module.scss";
import iconeFavoritar from "./favoritar.png";
import { useFavoritoContext } from "../../contextos/Favoritos";
import iconeDesfavoritar from "../Card/desfavoritar.png";
import { Link } from "react-router-dom";

export default function Card({ id, titulo, capa }) {
  const { favorito, adicionarFavorito } = useFavoritoContext();
  const ehFavorito = favorito.some((fav) => fav.id === id);
  const icone = !ehFavorito ? iconeFavoritar : iconeDesfavoritar;
  return (
    <div className={styles.cards}>
      <Link className={styles.link} to={`/${id}`}>
      <img src={capa} alt={titulo} className={styles.cards__capa} />
      <h2 className={styles.cards__titulo}>{titulo}</h2>
      </Link>
      <img
        src={icone}
        alt="Favoritar filme"
        className={styles.cards__favoritar}
        onClick={() => {
          adicionarFavorito({ id, titulo, capa });
        }}
      />
    </div>
  );
}
