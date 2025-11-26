import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashboardPage from './Page/DashboardPage'
import Skill from './Page/MySkill'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DashboardPage />} />
          <Route path='/skill' element={<Skill />} />


        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
