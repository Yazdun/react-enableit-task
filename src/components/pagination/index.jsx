import { Container } from '../container'
import css from './styles.module.css'
import { IoCaretBack, IoCaretForward } from 'react-icons/io5'
import { useScrollDirection } from '../../hooks'
import cn from 'classnames'

export const Pagination = ({ active, setActive }) => {
  const scrollDirection = useScrollDirection()

  const nextFn = () => setActive(prev => prev + 1)
  const backFn = () =>
    active === 1 ? setActive(1) : setActive(prev => prev - 1)

  return (
    <div className={cn(css.wrapper, scrollDirection > 100 && css.scrolled)}>
      <Container className={css.container}>
        <span className={css.title}>Page {active} </span>
        <ul>
          <li>
            <button className={css.cta} onClick={backFn}>
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
