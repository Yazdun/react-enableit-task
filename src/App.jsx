import './App.css'
import { MotionConfig } from 'framer-motion'
import { Container, ThemeToggle, Topbar } from './components'
import { useThemeContext } from './context'

function App() {
  const { theme } = useThemeContext()

  return (
    <MotionConfig reducedMotion="user">
      <main data-theme={theme}>
        <Container>
          <Topbar />
        </Container>
      </main>
    </MotionConfig>
  )
}

export default App
