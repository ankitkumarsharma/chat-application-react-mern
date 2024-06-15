import useContactStore from "../../store/useContactStore";
import useMobileScreenStore from "../../store/useMobileScreenStore";
import ChatRoom from "./ChatRoom";
import SendMessage from "./SendMessage";

const ChatRoomContainer = () => {
    const { selectedContact } = useContactStore();
    const { showOnMobile, setShowOnMobile } = useMobileScreenStore();
    const { setSelectedContact, setMessages } = useContactStore();

    const handleBack = () => {
        setSelectedContact(null);
        setShowOnMobile(false);
        setMessages([]);
    }

    return (
        <div className="bg-red-300 flex flex-col rounded-r p-3 h-[600px]">
            <div className="bg-gray-200 w-full flex rounded-md p-2 mb-3">
                {showOnMobile ?
                    (
                        <>
                            <div className="mr-3 w-[40%]" onClick={handleBack}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                                </svg>
                            </div>
                            <div className="text-right w-[60%]">
                                To: <span className="font-semibold">{selectedContact?.fullName}</span>
                            </div>
                        </>
                    ) :
                    (
                        <div>
                            To: <span className="font-semibold">{selectedContact?.fullName}</span>
                        </div>
                    )
                }
            </div>
            <ChatRoom />
            <SendMessage />
        </div>
    );
}

export default ChatRoomContainer;