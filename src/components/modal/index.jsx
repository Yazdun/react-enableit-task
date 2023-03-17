import css from './styles.module.css'
import { useRef } from 'react'
import { useOnClickOutside } from '../../hooks'
import { VscChromeClose } from 'react-icons/vsc'
import { motion } from 'framer-motion'

export const Modal = ({ setOpen, email }) => {
  const ref = useRef()

  useOnClickOutside(ref, () => setOpen(false))

  return (
    <motion.div {...framer_background} className={css.wrapper}>
      <motion.div {...framer_modal} className={css.modal} ref={ref}>
        <button onClick={() => setOpen(false)} className={css.cta}>
          <VscChromeClose />
        </button>
        <h1>User Info</h1>
        <p className={css.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In distinctio
          velit id aut eaque quidem natus? Eveniet, aliquam totam laboriosam
          deleniti aperiam accusantium veritatis sequi, delectus repellendus,
          dolores minima autem.
        </p>
      </motion.div>
    </motion.div>
  )
}

export const framer_background = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0.2 } },
  transition: { duration: 0.3 },
}

export const framer_modal = {
  initial: { y: '5%', opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: '5%', opacity: 0 },
  transition: { duration: 0.3 },
}
