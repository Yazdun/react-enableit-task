import { Card } from '../card'
import css from './styles.module.css'

export const Users = ({ data }) => {
  console.log(data)
  return (
    <ul className={css.list}>
      {data?.map(item => {
        return <Card data={item} key={item.FirstNameLastName} />
      })}
    </ul>
  )
}
