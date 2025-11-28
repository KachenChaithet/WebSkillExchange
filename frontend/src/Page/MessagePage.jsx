import { useEffect, useRef, useState } from "react"
import Navbar from "../Components/Navbar"

const MessagePage = () => {
    const [message, setMessage] = useState('')
    const ws = useRef(null)

    const sendMessage = async () => {
        socket.send(message)
        setMessage('')
    }
    useEffect(() => {
        const ws = new WebSocket('ws://localhost:5000')
        ws.current = ws

        ws.onmessage = (ev) => {
            console.log(ev.data);
            
        }
    }, [])
    return (
        <>
            <Navbar />
            <div>MessagePage</div>
            <input type="text" placeholder="enter message " className="border p-2" value={message} onChange={(e) => setMessage(e.target.value)} />
            <button className="bg-green-500 rounded-md p-2" onClick={sendMessage}>send message</button>
        </>
    )
}
export default MessagePage