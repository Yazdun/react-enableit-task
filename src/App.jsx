import './App.css'
import { MotionConfig } from 'framer-motion'
import { Container, Pagination, Source, Topbar, Users } from './components'
import { useThemeContext } from './context'
import { useModifiedSWR } from './hooks'
import { _getUsers } from './_api'
import { useEffect, useState } from 'react'

function App() {
  const [active, setActive] = useState(1)
  const { theme } = useThemeContext()
  const { data, isLoading } = useModifiedSWR(_getUsers(active))

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth', // Optional if you want to skip the scrolling animation
    })
  }, [active])

  return (
    <MotionConfig reducedMotion="user">
      <main data-theme={theme}>
        <Topbar />
        <Pagination active={active} setActive={setActive} />
        <Container>
          <Users data={data?.users?.slice(0, 10)} isLoading={isLoading} />
          <Source />
        </Container>
      </main>
    </MotionConfig>
  )
}

export default App
