import css from './styles.module.css'
import { useRef } from 'react'
import { useOnClickOutside } from '../../hooks'
import { VscChromeClose } from 'react-icons/vsc'
import { motion } from 'framer-motion'
import { UserImage } from '../image'
import { HiOutlineMail } from 'react-icons/hi'
import { FiPhone } from 'react-icons/fi'

export const Modal = ({ setOpen, data }) => {
  const { JobTitle, EmailAddress, FirstNameLastName, Company, Phone } = data
  const ref = useRef()

  useOnClickOutside(ref, () => setOpen(false))

  return (
    <motion.div {...framer_background} className={css.wrapper}>
      <motion.div {...framer_modal} className={css.modal} ref={ref}>
        <button onClick={() => setOpen(false)} className={css.cta}>
          <VscChromeClose />
        </button>
        <div className={css.header}>
          <UserImage big />
          <p className={css.title}>{FirstNameLastName}</p>
          <p className={css.subtitle}>
            <span>{JobTitle}</span> at <span>{Company}</span>
          </p>
        </div>
        <ul className={css.container}>
          <li>
            <span>{EmailAddress}</span>
            <HiOutlineMail />
          </li>
          <li>
            <span>{Phone}</span>
            <FiPhone />
          </li>
        </ul>
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
