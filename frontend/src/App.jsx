import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashboardPage from './Page/DashboardPage'
import MySkill from './Page/MySkillPage'
import MessagePage from './Page/MessagePage'
import LoginPage from './Page/LoginPage'
import SignUpPage from './Page/SignUpPage'
import RequireAuth from './Middlewere/RequireAuth'
import ProtectedLayout from './Middlewere/ProtectedLayout'
import ConnectPage from './Page/ConnectPage'
import { useEventUser } from './Store/useUserStore'
import { useEffect } from 'react'
import { useAuth, useUser } from '@clerk/clerk-react'
import { useChatStore } from './Store/useChatStore'

function App() {

  const { getToken } = useAuth()
  const fetchusers = useEventUser((e) => e.fetchuser)
  const setToken = useChatStore((e) => e.setToken)


  useEffect(() => {
    const loadUsers = async () => {
      const token = await getToken()
      await fetchusers(token)
      await setToken(token)
    }
    loadUsers()
  }, [getToken, fetchusers, MessagePage])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />

          <Route element={<ProtectedLayout />}>
            <Route path='/' element={<DashboardPage />} />
            <Route path='/skill' element={<MySkill />} />
            <Route path='/message' element={<MessagePage />} />
            <Route path="/message/:username" element={<MessagePage />} />
            <Route path='/connect' element={<ConnectPage />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
