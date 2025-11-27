import Navbar from "../Components/Navbar"
import Hero from "../Components/Home/Hero"
import TrendingSkill from "../Components/Home/TrendingSkill"
import PersonallzedFeed from "../Components/Home/PersonallzedFeed"
import RecentRequests from "../Components/Home/RecentRequests"

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