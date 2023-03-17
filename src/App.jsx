import './App.css'
import { MotionConfig } from 'framer-motion'
import { Container, Pagination, Topbar, Users } from './components'
import { useThemeContext } from './context'
import data from './mocks/users.json'

function App() {
  const { theme } = useThemeContext()

  return (
    <MotionConfig reducedMotion="user">
      <main data-theme={theme}>
        <Topbar />
        <Pagination />
        <Container>
          <Users data={data?.users?.slice(0, 10)} />
        </Container>
      </main>
    </MotionConfig>
  )
}

export default App
