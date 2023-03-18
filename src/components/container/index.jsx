/*-------------------------------------------------------------------
|  🐼 React FC Container
|
|  🐯 Purpose: RE-USEABLE CONTAINER COMPONENT TO WRAP THE ELEMENTS
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import cn from 'classnames'
import css from './styles.module.css'

export const Container = ({
  as: Element = 'div',
  children,
  className,
  ...rest
}) => {
  return (
    <Element {...rest} className={cn(css.container, className)}>
      {children}
    </Element>
  )
}
