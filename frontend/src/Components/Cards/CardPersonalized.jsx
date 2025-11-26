const CardPersonalized = ({ name, img, explain, title, text, tags = [] }) => {

    return (
        <div className="w-full ">
            <div className="p-4 bg-white rounded-lg">
                <div className="space-y-2">
                    <div className="flex items-center gap-4">
                        <img src={img} alt="" className="w-10 h-10 rounded-full" />
                        <div className="">
                            <h1 className="m-0 leading-tight text-xl font-semibold">{name}</h1>
                            <p className="m-0 leading-tight text-sm text-neutral-500">{explain}</p>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="space-y-4">
                            <h1 className="font-semibold text-2xl">{title}</h1>
                            <p className="text-sm text-neutral-500">{text}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {tags.map((item, index) => (
                                <span key={index} className="bg-[#d5e8fc]  px-2 py-1 rounded-2xl text-purple-400">
                                    {item}
                                </span>
                            ))}
                        </div>
                        <button className="bg-[#d5e8fc] w-full py-2 rounded-xl text-purple-400">View Detail</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardPersonalized