import React from 'react'
import { ThemeToggle } from '../theme'
import css from './styles.module.css'

export const Topbar = () => {
  return (
    <nav className={css.wrapper}>
      <h1>Users App</h1>
      <ThemeToggle />
    </nav>
  )
}
