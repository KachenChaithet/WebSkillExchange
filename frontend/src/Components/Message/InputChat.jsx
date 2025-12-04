import { SendHorizontal } from "lucide-react"
import { useRef } from "react"
import { useChatStore } from "../../Store/useChatStore"

const InputChat = () => {
  const inputRef = useRef(null)
  const sendMessage = useChatStore((e) => e.sendMessage)
  const currentFriend = useChatStore((e) => e.currentFriend)

  const handleSend = () => {
    const text = inputRef.current.value.trim()
    if (!text) {
      return alert('not found text')
    }

    sendMessage(text)
    inputRef.current.value = ''
  }

  return (
    <>
      {currentFriend && (
        <div className="min-h-[100px] p-6 bg-white">
          <div className="bg-neutral-100 p-4 rounded-xl flex items-center justify-between">

            <input
              ref={inputRef}
              type="text"
              placeholder="Type a message..."
              className="outline-none text-xl w-full h-full"
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />

            <button className="bg-blue-400 p-4 rounded-xl cursor-pointer" onClick={handleSend}>
              <SendHorizontal className="text-white" size={20} />
            </button>

          </div>
        </div>
      )}
    </>
  )
}

export default InputChat
