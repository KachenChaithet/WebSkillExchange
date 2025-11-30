import { Search } from "lucide-react"

const Sidebar = () => {
    return (
        <div className="w-100 min-h-screen  bg-white border border-neutral-200 ">


            {/* SeachTerm */}
            <div className="p-4 border-b border-neutral-200 space-y-4">
                <h1 className="text-2xl font-semibold">Conversations</h1>

                <div className="flex items-center w-full   bg-neutral-100 shadow-md rounded-lg overflow-hidden ">
                    <div className="flex items-center justify-center p-2 cursor-pointer active:scale-105 transition-transform">
                        <Search className="text-neutral-500" size={20} />
                    </div>
                    <input
                        type="text"
                        placeholder="Search conversaions"
                        className="flex-1 px-1 py-1 text-md font-medium outline-none "
                    />
                </div>
            </div>


            {/* UsersConversations */}
            <div className=" p-4 flex items-center justify-between border-l-3 border-transparent ">
                <div className="flex items-center gap-4">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgF2suM5kFwk9AdFjesEr8EP1qcyUvah8G7w&s" alt="" className="w-10 h-10" />
                    <div className="">
                        <h1 className="text-xl font-sans">username</h1>
                        <p className="font-medium text-neutral-500">explain user</p>
                    </div>
                </div>
                <h1 className="text-sm text-neutral-600">5m ago</h1>
            </div>

            <div className=" p-4 flex items-center justify-between border-l-3 border-[#2287ee] bg-[#e9f3fd] ">
                <div className="flex items-center gap-4 ">
                    <div className="relative w-10 h-10">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgF2suM5kFwk9AdFjesEr8EP1qcyUvah8G7w&s" alt="" className="w-full h-full rounded-full" />
                        <span className="w-3 h-3 bg-green-600 border-2 border-white rounded-full absolute bottom-0 right-0"></span>
                    </div>
                    <div className="">
                        <h1 className="text-xl font-sans text-blue-500">username</h1>
                        <p className="font-medium text-blue-500">explain user</p>
                    </div>

                </div>
                <h1 className="text-sm text-neutral-600">5m ago</h1>
            </div>
        </div>
    )
}
export default Sidebar