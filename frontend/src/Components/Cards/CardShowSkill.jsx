const CardShowSkill = ({ status, title, text, img }) => {
    return (
        <div className="w-[400px] rounded-xl border border-neutral-200 bg-white shadow-xl overflow-hidden "  >


            <div className="relative ">
                <img src={img} alt="" className=" w-full h-60 rounded-xl  object-cover hover:scale-110 transition-transform duration-500 " />
                <span className="absolute top-3 right-3 bg-green-500 px-3 py-1 rounded-2xl text-sm font-semibold text-neutral-100 ">{status}</span>
            </div>


            <div className="p-4 space-y-3">
                <div className="">
                    <h1 className="text-xl font-semibold">{title}</h1>
                    <p className="text-sm font-medium text-neutral-600">{text}</p>
                </div>
                <div className="space-x-2">
                    <button className="w-[70%] bg-[#ccdeeb] rounded-md py-2 font-semibold text-[#1265a2]">View Details</button>
                    <button className="w-[20%] rounded-md bg-[#f1f5f9] py-2 font-semibold">edit</button>
                </div>
            </div>
        </div>
    )
}
export default CardShowSkill