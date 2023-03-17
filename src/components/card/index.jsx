import css from './styles.module.css'
import { FaEye } from 'react-icons/fa'
import { useState } from 'react'
import { Modal, UserImage } from '../'
import { AnimatePresence } from 'framer-motion'

export const Card = ({ data }) => {
  const { JobTitle, FirstNameLastName } = data
  const [modal, setModal] = useState(false)

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        {modal && <Modal setOpen={setModal} data={data} />}
      </AnimatePresence>
      <li className={css.card}>
        <div className={css.info}>
          <UserImage />
          <div className={css.desc}>
            <p className={css.title}>{FirstNameLastName}</p>
            <p className={css.subtitle}>{JobTitle}</p>
          </div>
        </div>
        <button className={css.action} onClick={() => setModal(true)}>
          <FaEye />
        </button>
      </li>
    </>
  )
}
