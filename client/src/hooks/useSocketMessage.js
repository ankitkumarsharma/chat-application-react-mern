import {useSocketContext} from "../context/SocketContext";
import useContactStore from "../store/useContactStore";
import { useEffect } from "react";

const useSocketMessage = ()=>{
    const {socket} =  useSocketContext();
    const { messages, setMessages } = useContactStore();

    useEffect(()=>{
        socket?.on("newMessage", (newMessage)=>{
            if(messages) setMessages([...messages, newMessage]);
        });

        return ()=>{
            socket?.off("newMessage");
        }
    },[socket, messages, setMessages]);
}

export default useSocketMessage;