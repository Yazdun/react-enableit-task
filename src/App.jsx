/*-------------------------------------------------------------------
|                      🚀 REACT USERS APP 🚀
|
|  HELLO 👋! WELCOME TO USERS APP. THIS APP FETCHES DATA FROM AN 
|  EXTERNAL API AND DISPLAYS THE DATA. I BUILT THIS APP AS A TASK
|  FOR AN INTERVIEW. IF YOU HAVE ANY QUESTIONS, FEEL FREE TO REACH
|  REACH OUT TO ME OR OPEN AN ISSUE ON GITHUB. THANKS!
|
|  🔗CREATOR: https://yazdun.com
|  🔗SOURCE CODE: https://github.com/Yazdun/react-enableit-task
|
*-------------------------------------------------------------------*/

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
