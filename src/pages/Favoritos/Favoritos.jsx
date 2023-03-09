import React from "react";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import Titulo from "../../components/Titulo/Titulo";
import { useFavoritoContext } from "../../contextos/Favoritos";
import styles from "./Favoritos.module.scss";

export default function Favoritos() {
  const { favorito } = useFavoritoContext();
  return (
    <div>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Meus favoritos</h1>
      </Titulo>
      <section className={styles.favoritos} >
        {favorito.map((fav) => {
          return <Card {...fav} key={fav.id} />;
        })}
      </section>
    </div>
  );
}
