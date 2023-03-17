import React from 'react'
import { Container } from '../container'
import { ThemeToggle } from '../theme'
import css from './styles.module.css'

export const Topbar = () => {
  return (
    <div className={css.nav}>
      <Container as="nav" className={css.wrapper}>
        <h1 className={css.title}>Users App</h1>
        <ThemeToggle />
      </Container>
    </div>
  )
}
