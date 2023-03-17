import css from './styles.module.css'

export const Pagination = () => {
  return (
    <div className={css.wrapper}>
      <span className={css.title}>Users List</span>
      <ul>
        <li>
          <button>Back</button>
        </li>
        <li>
          <button>Next</button>
        </li>
      </ul>
    </div>
  )
}
