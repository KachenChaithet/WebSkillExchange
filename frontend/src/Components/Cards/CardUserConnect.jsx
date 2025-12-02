const CardUserConnect = ({ img, name, stack = [], title, status }) => {
    return (
        <div className="min-w-[400px] flex flex-col items-center bg-white p-4 gap-4 rounded-xl">
            <img src={img} alt={img || 'not image'} className="w-18 h-18 rounded-full" />
            <h1 className="font-semibold text-xl">{name}</h1>
            <p className="text-neutral-500">{title}</p>
            <div className="flex flex-wrap gap-2">
                {stack.map((item) => (
                    <span className="bg-[#d5e8fc] rounded-full px-2 py-1 text-blue-500  text-sm">{item}</span>
                ))}
            </div>
            <button className={`px-4 py-2  rounded-xl w-full font-semibold ${status === 'friend' || status === 'none' ? 'bg-blue-500 text-white hover:bg-blue-600' : status === 'pending_received' ? 'bg-green-500 text-white hover:bg-green-600 ' : 'bg-white border border-neutral-200 hover:bg-neutral-100'} `}>{status === 'friend' ? 'Message' : status === 'none' ? 'Connect' : status === 'pending_received' ? 'Accept' : 'pending'}</button>
        </div>
    )
}
export default CardUserConnect