import CardPersonalized from "../Components/Cards/CardPersonalized"
import PersonallzedFeed from "../Components/Home/PersonallzedFeed"
import Navbar from "../Components/Navbar"
import RecentReviews from "../Components/Skills/RecentReviews"
import RequestVolume from "../Components/Skills/RequestVolume"
import Skill from "../Components/Skills/Skill"
import SkillPerformance from "../Components/Skills/SkillPerformance"

const MySkill = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f6f7f8] px-20 mx-auto ">
        <Skill />
        <div className="flex flex-wrap gap-8 mt-10">
          <div className="flex-2 min-w-[350px] space-y-4">
            <SkillPerformance />
            <RequestVolume />
          </div>

          <div className="flex-1 min-w-[300px]">
            <RecentReviews />
          </div>
        </div>
      </div>
    </>
  )
}
export default MySkill