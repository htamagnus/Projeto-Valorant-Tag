import React from 'react'
import styles from './NaoEncontrada.module.scss'
import Erro404 from './Erro404.jpg'

export default function NaoEncontrada() {
  return (
    <section >
        <img className={styles.imagem} src={Erro404}/>
    </section>
  )
}
