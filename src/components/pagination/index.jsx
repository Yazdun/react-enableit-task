import { Container } from '../container'
import css from './styles.module.css'
import { IoCaretBack, IoCaretForward } from 'react-icons/io5'
import { useScrollDirection } from '../../hooks'
import cn from 'classnames'

export const Pagination = () => {
  const scrollDirection = useScrollDirection()

  return (
    <div className={cn(css.wrapper, scrollDirection > 100 && css.scrolled)}>
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
