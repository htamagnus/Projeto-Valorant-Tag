import React from 'react'
import styles from './Container.module.scss'

export default function Container({children}) {
  return (
    <section className={styles.section}>
        {children}
    </section>
  )
}
