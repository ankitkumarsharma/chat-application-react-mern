import { useSocketContext } from "../context/SocketContext";
import useContactStore from "../store/useContactStore";
import { useEffect } from "react";
import notificationAudio from "../utils/notificationAudio";

const useSocketMessage = () => {
    const { socket } = useSocketContext();
    const { messages, setMessages, selectedContact, setLatestMessage } = useContactStore();

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            setLatestMessage(newMessage);
            if (messages) {
                notificationAudio();
                if(newMessage?.senderId === selectedContact?._id) { 
                    setMessages([...messages, newMessage]);
                }  
            }
        });

        return () => {
            socket?.off("newMessage");
        }
    }, [socket, messages, setMessages]);
}

export default useSocketMessage;