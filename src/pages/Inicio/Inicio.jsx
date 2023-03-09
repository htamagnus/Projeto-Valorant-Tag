import React, { useEffect } from "react";
import { useState } from "react";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import Titulo from "../../components/Titulo/Titulo";
import styles from "./Inicio.module.scss";

export default function Inicio() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/htamagnus/valoranttag-api/videos"
    )
      .then((resposta) => resposta.json())
      .then((dados) => {
        setVideos(dados);
      });
  }, []);
  
  return (
    <>
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos de Valorant!</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />;
        })}
      </section>
    </>
  );
}
