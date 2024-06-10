import ChatRoom from "./ChatRoom";
import SendMessage from "./SendMessage";

const Conversation = () => {
    return (
        <div className="bg-red-300 w-2/3 flex flex-col rounded-r p-3 h-[600px]">
            <div className="bg-gray-200 w-full rounded-md p-2 mb-3">
                To: <span className="font-semibold">Ankit Kumar</span>
            </div>
            <ChatRoom/>
            <SendMessage/>
        </div>
    );
}

export default Conversation;