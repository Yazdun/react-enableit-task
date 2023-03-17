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
    <button onClick={switchTheme} className={css.cta}>
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'light' ? (
          <ThemeState icon={<IoMdSunny />} key="light" />
        ) : (
          <ThemeState icon={<IoMoon />} key="dark" />
        )}
      </AnimatePresence>
    </button>
  )
}

const ThemeState = ({ icon }) => {
  return (
    <motion.span {...framer_toggle} className={css.state}>
      {icon}
    </motion.span>
  )
}

export const framer_toggle = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
  transition: { duration: 0.3 },
}
