import css from './styles.module.css'
import { AiOutlineUser } from 'react-icons/ai'
import { FaEye } from 'react-icons/fa'

export const Card = ({ data }) => {
  const { JobTitle, FirstNameLastName, Company } = data
  return (
    <li className={css.card}>
      <div className={css.info}>
        <div className={css.image}>
          <AiOutlineUser />
        </div>
        <div className={css.desc}>
          <p className={css.title}>{FirstNameLastName}</p>
          <p className={css.subtitle}>{JobTitle}</p>
        </div>
      </div>
      <button className={css.action}>
        <FaEye />
      </button>
    </li>
  )
}
