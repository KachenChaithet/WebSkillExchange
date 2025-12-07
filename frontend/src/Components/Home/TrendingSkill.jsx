const TrendingSkill = () => {
    const skills = [
        "AI Prompt Engineering",
        "UX Design",
        "Digital Marketing",
        "Python Development",
        "Public Speaking"
    ];
    return (
        < div className="w-full max-w-[300px]  bg-white rounded-2xl p-6 shadow-sm border border-gray-100" >

            < h2 className="text-xl font-bold text-gray-900 mb-6" >
                Trending Skills
            </h2 >

            < ul className="space-y-4" >
                {
                    skills.map((skill, index) => (
                        <li
                            key={index}
                            className="text-slate-500 font-medium hover:text-blue-600 cursor-pointer transition-colors duration-200"
                        >
                            {skill}
                        </li>
                    ))
                }
            </ul >
        </div >
    )
}
export default TrendingSkill