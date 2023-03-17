import { Container } from '../container'
import css from './styles.module.css'
import { IoCaretBack, IoCaretForward } from 'react-icons/io5'

export const Pagination = () => {
  return (
    <div className={css.wrapper}>
      <Container className={css.container}>
        <span className={css.title}>Users List</span>
        <ul>
          <li>
            <button className={css.cta}>
              <IoCaretBack />
              Back
            </button>
          </li>
          <li>
            <button className={css.cta}>
              Next
              <IoCaretForward />
            </button>
          </li>
        </ul>
      </Container>
    </div>
  )
}
