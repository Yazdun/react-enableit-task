import { AiOutlineUser } from 'react-icons/ai'
import css from './styles.module.css'
import cn from 'classnames'

export const UserImage = ({ big }) => {
  return (
    <div className={cn(css.image, big ? css.big : css.sm)}>
      <AiOutlineUser />
    </div>
  )
}
