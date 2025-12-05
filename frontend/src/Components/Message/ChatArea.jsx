import { useEffect, useRef } from "react";
import { useChatStore } from "../../Store/useChatStore";
import OwnMessage from "./OwnMessage";
import FriendMessage from "./FriendMessage";

const ChatArea = () => {
    const message = useChatStore((e) => e.message);
    const currentUser = useChatStore((e) => e.currentUser);
    const person = useChatStore((e) => e.friend);

    const bottomRef = useRef(null);

    const chatMessage = message.filter(
        (msg) =>
            (msg.senderId === currentUser && msg.receiverId === person.clerkId) ||
            (msg.senderId === person.clerkId && msg.receiverId === currentUser)
    )




    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [chatMessage]);

    if (!person) {
        return <div className="bg-neutral-100 flex-1 p-4">not found</div>;
    }

    return (
        <div className="flex flex-col bg-neutral-100 flex-1 p-4  h-[436px]">
            {chatMessage && (
                <>
                    {chatMessage.map((msg, index) =>
                        msg.senderId === currentUser ? (
                            <OwnMessage key={index} text={msg.text} time={new Date(msg.createdAt).toDateString()} />
                        ) : (
                            <FriendMessage key={index} img={person.avatarUrl} text={msg.text} time={new Date(msg.createdAt).toDateString()} />
                        )
                    )}
                </>
            )}
            <div ref={bottomRef} />
        </div>
    );
};

export default ChatArea;
