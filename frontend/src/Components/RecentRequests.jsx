const RecentRequests = () => {
    const data = [
        { name: 'kachen chiyathet', img: 'https://media1.thrillophilia.com/filestore/v7h4ylcvnjh7dkpxg85jgw5gfqx4_IMG%20World%20Dubai%20Fun%20(1).jpg', text: 'by karsocool' },
        { name: 'joinner', img: 'https://media1.thrillophilia.com/filestore/v7h4ylcvnjh7dkpxg85jgw5gfqx4_IMG%20World%20Dubai%20Fun%20(1).jpg', text: 'by karsocool' },
        { name: 'joinner', img: 'https://media1.thrillophilia.com/filestore/v7h4ylcvnjh7dkpxg85jgw5gfqx4_IMG%20World%20Dubai%20Fun%20(1).jpg', text: 'by karsocool' },
    ]
    return (
        <div className="w-full max-w-[300px] p-4 bg-white space-y-4">
            <h1 className="text-xl font-semibold">Recent Requests</h1>

            <div className="space-y-4">
            {data.map((item,index) => (
                <div className="flex  items-center gap-2" key={index}>
                    <img src={item.img} alt="" className="w-10 h-10 rounded-full" />
                    <div className="">
                        <h1 className="m-0 leading-tight font-semibold text-lg">{item.name}</h1>
                        <p className="m-0 leading-tight text-neutral-500 font-medium text-sm">{item.text}</p>
                    </div>
                </div>
            ))}
            </div>

        </div>
    )
}
export default RecentRequests