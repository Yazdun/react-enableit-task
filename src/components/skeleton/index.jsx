import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useThemeContext } from '../../context'

export const LoadingSkeleton = props => {
  const { theme } = useThemeContext()

  return (
    <Skeleton
      {...props}
      baseColor={theme === 'dark' ? '#202020' : '#d1d5db'}
      highlightColor={theme === 'dark' ? '#444' : '#e5e7eb'}
    />
  )
}
