import { Container } from '../container'
import css from './styles.module.css'
import { IoCaretBack, IoCaretForward } from 'react-icons/io5'
import { useScrollDirection } from '../../hooks'
import cn from 'classnames'
import { motion, AnimatePresence } from 'framer-motion'

export const Pagination = ({ active, setActive }) => {
  const scrollDirection = useScrollDirection()

  const nextFn = () => setActive(prev => prev + 1)
  const backFn = () =>
    active === 1 ? setActive(1) : setActive(prev => prev - 1)

  return (
    <div className={cn(css.wrapper, scrollDirection > 100 && css.scrolled)}>
      <Container className={css.container}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.p key={active} {...framer_text} className={css.title}>
            Page {active}{' '}
          </motion.p>
        </AnimatePresence>
        <ul>
          <li>
            <button
              className={css.cta}
              onClick={backFn}
              disabled={active === 1}
            >
              <IoCaretBack />
              Back
            </button>
          </li>
          <li>
            <button className={css.cta} onClick={nextFn}>
              Next
              <IoCaretForward />
            </button>
          </li>
        </ul>
      </Container>
    </div>
  )
}

export const framer_text = {
  initial: { x: '-20%', opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: '20%', opacity: 0 },
  transition: { duration: 0.3 },
}
