import CardShowSkill from "../Cards/CardShowSkill"

const Skill = () => {
    const data = [
        {
            img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
            title: "JavaScript",
            text: "Intermediate",
            status: "Active"
        },
        {
            img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
            title: "JavaScript",
            text: "Intermediate",
            status: "Active"
        },
        {
            img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
            title: "JavaScript",
            text: "Intermediate",
            status: "Active"
        },
        {
            img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
            title: "JavaScript",
            text: "Intermediate",
            status: "Active"
        },
        {
            img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
            title: "React",
            text: "Advanced",
            status: "Active"
        },
        {
            img: "https://images.unsplash.com/photo-1502764613149-7f1d229e230f",
            title: "CSS",
            text: "Beginner",
            status: "Inactive"
        }
    ];

    return (<>
        {/* fuction */}
        <div className=" w-full">
            <div className="flex justify-between flex-1 pt-10">
                <div className="">
                    <h1 className="text-5xl font-bold">My Skills</h1>
                    <p>A visual and interactive of your offered skills.</p>
                </div>
                <div className="flex gap-8 items-center">
                    <button className="font-bold text-neutral-600">setting Manage Skills</button>
                    <button className="bg-[#005a9c] text-white font-semibold px-4 py-2 rounded-md">Add New Skill</button>
                </div>
            </div>


              <div className="flex gap-8 mt-10">
                {data.map((item) => (
                    <CardShowSkill img={item.img} text={item.text} status={item.status} title={item.title} />

                ))}
            </div>
        </div>
        


    </>
    )
}
export default Skill