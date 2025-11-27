import Navbar from "../Components/Navbar"
import RequestVolume from "../Components/Skills/RequestVolume"
import Skill from "../Components/Skills/Skill"
import SkillPerformance from "../Components/Skills/SkillPerformance"

const MySkill = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f6f7f8] px-20 ">
        <Skill />
        <SkillPerformance />
        <RequestVolume/>
      </div>
    </>
  )
}
export default MySkill