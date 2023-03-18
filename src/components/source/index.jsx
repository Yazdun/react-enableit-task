/*-------------------------------------------------------------------
|  🐼 React FC Source
|
|  🐯 Purpose: LINKS TO PORTFOLIO AND SOURCE CODE
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import css from './styles.module.css'

export const Source = () => {
  return (
    <div className={css.wrapper}>
      <p>
        Created by{' '}
        <a href="https://yazdun.com" target="_blank" rel="noreferrer">
          Yazdun
        </a>{' '}
        |
      </p>

      <a
        href="https://github.com/Yazdun/react-enableit-task"
        target="_blank"
        rel="noreferrer"
      >
        Source Code
      </a>
    </div>
  )
}
