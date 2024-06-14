import { createContext, useEffect, useState, useContext } from "react";
import { useAuthContext } from "../context/AuthContext";
import io from "socket.io-client";

export const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
}

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const {authUser} = useAuthContext();

    useEffect(()=>{
        
        if(authUser) { 
            const socket = io("http://localhost:5000",{
                autoConnect: true,
                query: {
                    userId: authUser.id
                }
            });
            setSocket(socket);

            socket.on("getOnlineUser", (onlineUsers) => {
                setOnlineUsers(onlineUsers);
            });
            return () => socket.close();
         } else {
            if(socket) {
                socket.close();
                setSocket(null);
            }
         }
         // eslint-disable-next-line
    },[authUser]);

    return (
        <SocketContext.Provider value={{socket, onlineUsers}}>
            {children}
        </SocketContext.Provider>
    )
}