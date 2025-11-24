import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import TrendingSkill from './Components/TrendingSkill'
import './index.css'

function App() {

  return (
    <>
      <h1 className='h-screen bg-[#f6f7f8]'>
        <Navbar />
        <Hero />
        <TrendingSkill/>
      </h1>
    </>
  )
}

export default App
