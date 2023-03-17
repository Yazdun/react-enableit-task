/*-------------------------------------------------------------------
|  🐼 React FC ThemeToggle
|
|  🐯 Purpose: TOGGLE LIGHT MODE / DARK MODE
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import css from './styles.module.css'
import { useThemeContext } from '../../context'
import { IoMdSunny } from 'react-icons/io'
import { IoMoon } from 'react-icons/io5'
import { motion, AnimatePresence } from 'framer-motion'

export const ThemeToggle = () => {
  const { theme, setTheme } = useThemeContext()

  const switchTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  return (
    <button onClick={switchTheme}>
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'light' ? (
          <ThemeState icon={<IoMdSunny />} text="dark" key="light" />
        ) : (
          <ThemeState icon={<IoMoon />} text="light" key="dark" />
        )}
      </AnimatePresence>
    </button>
  )
}

const ThemeState = ({ text, icon }) => {
  return (
    <motion.span {...framer_toggle} className={css.state}>
      {text}
      {icon}
    </motion.span>
  )
}

export const framer_toggle = {
  initial: {
    y: '-100%',
    opacity: 0,
  },
  animate: {
    y: 0,
    scale: 1,
    opacity: 1,
  },
  exit: {
    y: '100%',
    opacity: 0,
  },
  transition: { duration: 0.3 },
}
