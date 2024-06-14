import {useSocketContext} from "../context/SocketContext";
import useContactStore from "../store/useContactStore";
import { useEffect } from "react";


const useSocketMessage = ()=>{
    const {socket} =  useSocketContext();
    const { message, setMessage } = useContactStore();

    useEffect(()=>{
        socket?.on("newMessage", (newMessage)=>{
            if(message) setMessage([...message, newMessage]);
        });
        return ()=>{
            socket?.off("newMessage");
        }
    },[socket, message, setMessage]);
}

export default useSocketMessage;