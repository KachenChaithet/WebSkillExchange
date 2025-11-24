const Navbar = () => {
    return (
        <div className="bg-white max-h-[100px] p-6 flex justify-between items-center shadow-sm">
            <h1 className="text-3xl">Logo</h1>
            <ul className="flex text-xl font-semibold text-neutral-400 gap-8">
                <li className="hover:text-neutral-500 cursor-pointer">Home</li>
                <li className="hover:text-neutral-500 cursor-pointer">My Skills</li>
                <li className="hover:text-neutral-500 cursor-pointer">Message</li>
            </ul>

            <div className="">
                profile
            </div>
        </div>
    )
}
export default Navbar