import {useSocketContext} from "../context/SocketContext";
import useContactStore from "../store/useContactStore";
import { useEffect } from "react";
import useMessages from "./useMessages";


const useSocketMessage = ()=>{
    const {socket} =  useSocketContext();
    const { message, setMessage } = useContactStore();
    const { getMessages } = useMessages();

    useEffect(()=>{
        socket?.on("newMessage", (newMessage)=>{
            console.log("newMessage from socket: " + JSON.stringify(newMessage));
            console.log("message: " + message);
            if(message) setMessage([...message, newMessage]);
        });

        return ()=>{
            socket?.off("newMessage");
        }
    },[socket, message, setMessage]);
}

export default useSocketMessage;