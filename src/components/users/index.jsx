import { Card } from '../card'
import { LoadingSkeleton } from '../skeleton'
import css from './styles.module.css'

export const Users = ({ data, isLoading }) => {
  if (isLoading) {
    return (
      <ul>
        <LoadingSkeleton count={10} className={css.loading} />
      </ul>
    )
  }
  return (
    <ul className={css.list}>
      {data?.map(item => {
        return <Card data={item} key={item.FirstNameLastName} />
      })}
    </ul>
  )
}
