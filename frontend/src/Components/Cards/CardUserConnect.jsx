import { useNavigate } from "react-router-dom";
import { useEventUser } from "../../Store/useUserStore";

const CardUserConnect = ({ id, img, name, stack = [], title, status, user }) => {

    const acceptFriend = useEventUser((e) => e.acceptFriend)
    const updateUserStatus = useEventUser((e) => e.updateUserStatus)
    const addFriend = useEventUser((e) => e.addFriend)
    const navigate = useNavigate()


    const handleAction = async (action) => {

        if (action === 'accept') {
            updateUserStatus(id, 'friend')
            await acceptFriend(id)
        } else if (action === 'message') {
            navigate(`/message/${name}`, { state: { person: user } })
        } else if (action === 'connect') {
            addFriend(id)
        }


    }

    console.log(status);

    return (
        <div className="min-w-[400px] flex flex-col items-center bg-white p-4 gap-4 rounded-xl">
            <img src={img} alt={img || 'not image'} className="w-18 h-18 rounded-full" />
            <h1 className="font-semibold text-xl">{name}</h1>
            <p className="text-neutral-500">{title}</p>
            <div className="flex flex-wrap gap-2">
                {stack.map((item) => (
                    <span key={item} className="bg-[#d5e8fc] rounded-full px-2 py-1 text-blue-500 text-sm">{item}</span>
                ))}
            </div>

            {status === 'pending_received' ? (
                <div className="flex gap-2 w-full">
                    <button
                        onClick={() => handleAction('accept')}
                        className="flex-1 bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 font-semibold"
                    >
                        Accept
                    </button>
                    <button
                        onClick={() => handleAction('reject')}
                        className="flex-1 bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 font-semibold"
                    >
                        Reject
                    </button>
                </div>
            ) : (
                <button
                    onClick={() => handleAction(status === 'friend' ? 'message' : 'connect')}
                    className={`px-4 py-2 rounded-xl w-full font-semibold ${status === 'friend' || status === 'none'
                        ? 'bg-blue-500 text-white hover:bg-blue-600'
                        : 'bg-white border border-neutral-200 hover:bg-neutral-100'
                        }`}
                >
                    {status === 'friend' ? 'Message' : status === 'pending_sent' ? 'pending' : 'connect'}
                </button>
            )}
        </div>
    )
}

export default CardUserConnect
