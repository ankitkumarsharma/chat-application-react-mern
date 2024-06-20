import { useSocketContext } from "../context/SocketContext";
import useContactStore from "../store/useContactStore";
import { useEffect } from "react";
import notificationAudio from "../utils/notificationAudio";

const useSocketMessage = () => {
    const { socket } = useSocketContext();
    const { messages, setMessages } = useContactStore();

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            if (messages) {
                notificationAudio();
                setMessages([...messages, newMessage]);
            }
        });

        return () => {
            socket?.off("newMessage");
        }
    }, [socket, messages, setMessages]);
}

export default useSocketMessage;