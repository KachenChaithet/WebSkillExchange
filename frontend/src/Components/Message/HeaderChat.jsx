import { useLocation } from "react-router-dom";

const HeaderChat = () => {
    const location = useLocation();
    const person = location.state?.person;

    return (
        <>
            {person && (
                <div className="py-2 px-4 ">
                    <div className="flex items-center gap-4">
                        <div className="relative w-10 h-10">
                            <img src={person.avatarUrl} alt="" className="w-full h-full rounded-full" />
                            <span className="w-3 h-3 bg-green-500 border-2 border-white absolute rounded-full bottom-0 right-0" ></span>
                        </div>
                        <div className="">
                            <h1 className="text-xl font-sans">{person.username}</h1>
                            <p className="font-medium text-green-500">Online</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
export default HeaderChat