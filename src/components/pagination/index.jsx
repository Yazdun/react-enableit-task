/*-------------------------------------------------------------------
|  🐼 React FC Pagination
|
|  🐯 Purpose: ALLOWS USERS TO TOGGLE PAGES
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

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
    <div className={cn(css.wrapper, scrollDirection > 70 && css.scrolled)}>
      <Container className={css.container}>
        <p className={css.title}>Page {active}</p>
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
