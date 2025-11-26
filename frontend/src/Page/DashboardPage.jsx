import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import TrendingSkill from '../Components/TrendingSkill'
import PersonallzedFeed from '../Components/PersonallzedFeed'
import RecentRequests from '../Components/RecentRequests'

const DashboardPage = () => {
    return (
        <>
            <div className='h-screen bg-[#f6f7f8]'>
                <Navbar />
                <Hero />
                <div className="flex flex-wrap justify-center gap-8">
                    <TrendingSkill />
                    <PersonallzedFeed />
                    <RecentRequests />
                </div>
            </div>
        </>
    )
}
export default DashboardPage