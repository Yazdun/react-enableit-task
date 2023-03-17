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
import cn from 'classnames'

export const ThemeToggle = () => {
  const { theme, setTheme } = useThemeContext()

  const switchTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  return (
    <button onClick={switchTheme} className={css.cta}>
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'light' ? (
          <ThemeState icon={<IoMdSunny />} key="light" />
        ) : (
          <ThemeState icon={<IoMoon />} dark key="dark" />
        )}
      </AnimatePresence>
    </button>
  )
}

const ThemeState = ({ icon, dark }) => {
  return (
    <motion.div
      {...framer_toggle}
      className={cn(css.state, dark ? css.dark : css.light)}
    >
      {icon}
    </motion.div>
  )
}

export const framer_toggle = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
  },
  exit: {
    scale: 0,
    opacity: 0,
  },
  transition: { duration: 0.3 },
}
