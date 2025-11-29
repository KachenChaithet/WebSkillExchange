import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashboardPage from './Page/DashboardPage'
import MySkill from './Page/MySkillPage'
import MessagePage from './Page/MessagePage'
import LoginPage from './Page/LoginPage'
import SignUpPage from './Page/SignUpPage'
import RequireAuth from './Middlewere/RequireAuth'
import ProtectedLayout from './Middlewere/ProtectedLayout'

function App() {

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
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
