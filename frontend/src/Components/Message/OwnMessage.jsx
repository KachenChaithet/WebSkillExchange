const OwnMessage = ({ text }) => {
    return (
        <div className="flex justify-end gap-4">
            <div className="flex flex-col items-end mb-2 gap-1  max-w-[80%] ">
                <div className="bg-blue-500 text-white p-3 rounded-xl rounded-br-none ">
                    <p>{text}
                    </p>
                </div>
                <span className="text-sm text-neutral-500 font-medium">10:49 AM</span>
            </div>
        </div>
    )
}
export default OwnMessage