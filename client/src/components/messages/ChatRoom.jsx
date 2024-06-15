import { useEffect, useRef } from "react";
import useMessages from "../../hooks/useMessages";
import useSocketMessage from "../../hooks/useSocketMessage";
import Message from "./Message";

const ChatRoom = () => {
    const { messages } = useMessages();
    useSocketMessage();
    const lastMessageRef = useRef();

    useEffect(() => {
        if (lastMessageRef.current) {
            lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    return (
        <div className="flex flex-col rounded-lg shadow-inner overflow-x-auto p-3 pt-6 h-[540px] mb-2 bg-white">
            {messages.map((message) => (
                <div key={message._id} ref={lastMessageRef}>
                    <Message message={message} />
                </div>
            ))}
        </div>
    );
}

export default ChatRoom;