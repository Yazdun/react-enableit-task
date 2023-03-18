/*-------------------------------------------------------------------
|  🐼 React CTX ThemeContext
|
|  🐯 Purpose: TOGGLE APP'S THEME GLOBALLY
|
|  🐸 Returns: CTX PROVIDER / CTX HOOK
*-------------------------------------------------------------------*/

import { useContext, createContext } from 'react'
import { useLocalStorage } from '../hooks'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const defaultDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches

  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light',
  )

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeContext() {
  return useContext(ThemeContext)
}
