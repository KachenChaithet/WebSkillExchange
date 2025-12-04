import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useChatStore } from "../../Store/useChatStore";
import OwnMessage from "./OwnMessage";
import FriendMessage from "./FriendMessage";

const ChatArea = () => {
    const location = useLocation();
    const person = location.state?.person;
    const message = useChatStore((e) => e.message);
    const currentUser = useChatStore((e) => e.currentUser);

    const bottomRef = useRef(null);

    // scroll ลงล่างทุกครั้งที่ message เปลี่ยน
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);

    if (!person) {
        return <div className="bg-neutral-100 flex-1 p-4">not found</div>;
    }

    return (
        <div className="flex flex-col bg-neutral-100 flex-1 p-4  h-[436px]">
            {message.map((msg, index) =>
                msg.senderId === currentUser ? (
                    <OwnMessage key={index} text={msg.text} />
                ) : (
                    <FriendMessage key={index} img={person.avatarUrl} text={msg.text} />
                )
            )}
            {/* anchor สำหรับ scroll */}
            <div ref={bottomRef} />
        </div>
    );
};

export default ChatArea;
