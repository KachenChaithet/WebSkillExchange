import { useEventUser } from "../../Store/useUserStore"

const RecentRequests = () => {
    const users = useEventUser((e) => e.userAll)
    if (!users || users.length === 0) {
        return <div className="">Loading...</div>
    }
console.log(users);

    const requests = users.filter((user) => user.status === 'pending_received')



    return (
        <div className="w-full max-w-[300px] p-4 bg-white space-y-4 rounded-2xl">
            <h1 className="text-xl font-semibold">Recent Requests</h1>

            <div className="space-y-4">
                {requests.length === 0 ? (
                    <div className="">not found</div>
                ) :
                    requests.map((item, index) => (
                        <div className="flex  items-center gap-2" key={index}>
                            <img src={item.avatarUrl} alt="" className="w-10 h-10 rounded-full" />
                            <div className="">
                                <h1 className="m-0 leading-tight font-semibold text-lg">{item.username}</h1>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
export default RecentRequests