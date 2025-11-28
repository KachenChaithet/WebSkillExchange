import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashboardPage from './Page/DashboardPage'
import MySkill from './Page/MySkillPage'
import MessagePage from './Page/MessagePage'

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DashboardPage />} />
          <Route path='/skill' element={<MySkill />} />
          <Route path='/message' element={<MessagePage />} />

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
