const FriendMessage = ({ img, text, time }) => {
    
    return (
        <div className="flex gap-4">
            <img src={img} alt="" className="w-10 h-10 rounded-full" />
            <div className="flex flex-col items-start mb-2 gap-1  max-w-[80%]">
                <div className="bg-white text-black p-3 rounded-xl rounded-tl-none  ">
                    <p>{text}
                    </p>
                </div>
                <span className="text-sm text-neutral-500 font-medium">{time}</span>
            </div>
        </div>
    )
}
export default FriendMessage