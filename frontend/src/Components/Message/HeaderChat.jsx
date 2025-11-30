const HeaderChat = () => {
    return (
        <div className="py-2 px-4 ">
            <div className="flex items-center gap-4">
                <div className="relative w-10 h-10">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgF2suM5kFwk9AdFjesEr8EP1qcyUvah8G7w&s" alt="" className="w-full h-full rounded-full" />
                    <span className="w-3 h-3 bg-green-500 border-2 border-white absolute rounded-full bottom-0 right-0" ></span>
                </div>
                <div className="">
                    <h1 className="text-xl font-sans">username</h1>
                    <p className="font-medium text-green-500">Online</p>
                </div>
            </div>
        </div>
    )
}
export default HeaderChat