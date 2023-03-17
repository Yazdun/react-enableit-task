import './App.css'
import { MotionConfig } from 'framer-motion'
import { Container, Pagination, Topbar, Users } from './components'
import { useThemeContext } from './context'
import { useModifiedSWR } from './hooks'
import { _getUsers } from './_api'
import { useState } from 'react'

function App() {
  const [active, setActive] = useState(1)
  const { theme } = useThemeContext()
  const { data, isLoading } = useModifiedSWR(_getUsers(active))

  console.log(data)

  return (
    <MotionConfig reducedMotion="user">
      <main data-theme={theme}>
        <Topbar />
        <Pagination active={active} setActive={setActive} />
        <Container>
          <Users data={data?.users?.slice(0, 10)} isLoading={isLoading} />
        </Container>
      </main>
    </MotionConfig>
  )
}

export default App
