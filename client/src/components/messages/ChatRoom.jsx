import useMessages from "../../hooks/useMessages";
import Message from "./Message";

const ChatRoom = () => {
    const { loading, messages } = useMessages();
    console.log(messages);
    return (
        <div className="flex flex-col rounded-lg shadow-inner overflow-x-auto p-3 pt-6 h-[540px] mb-2 bg-white">
            {messages.map((message) => (
                <Message key={message._id} message={message} />
            ))}
        </div>
    );
}

export default ChatRoom;