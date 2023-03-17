import './App.css'
import { MotionConfig } from 'framer-motion'
import { ThemeToggle } from './components'
import { useThemeContext } from './context'

function App() {
  const { theme } = useThemeContext()

  return (
    <MotionConfig reducedMotion="user">
      <main data-theme={theme}>
        <h1>hello</h1>
        <ThemeToggle />
      </main>
    </MotionConfig>
  )
}

export default App
