const ChatArea = () => {
    return (
        <div className="bg-neutral-100 flex-1 p-4">
            <div className="flex gap-4">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgF2suM5kFwk9AdFjesEr8EP1qcyUvah8G7w&s" alt="" className="w-10 h-10 rounded-full" />
                <div className="flex flex-col items-start mb-2 gap-1">
                    <div className="bg-white text-black p-3 rounded-xl rounded-tl-none max-w-[80%] relative ">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
                    </div>
                    <span className="text-sm text-neutral-500 font-medium">10:49 AM</span>
                </div>
            </div>

            <div className="flex justify-end gap-4">
                <div className="flex flex-col items-end mb-2 gap-1">
                    <div className="bg-blue-500 text-white p-3 rounded-xl rounded-br-none max-w-[80%] relative ">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
                    </div>
                    <span className="text-sm text-neutral-500 font-medium">10:49 AM</span>
                </div>
            </div>
        </div>
    )
}
export default ChatArea