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
    const { authUser } = useAuthContext();

    useEffect(() => {
        if (authUser) {
            const socket = io(process.env.REACT_APP_SERVER_URL, {
                autoConnect: true,
                query: {
                    userId: authUser._id
                }
            });
            setSocket(socket);

            socket.on("getOnlineUser", (onlineUsers) => {
                setOnlineUsers(onlineUsers);
            });
            return () => socket.close();
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
        // eslint-disable-next-line
    }, [authUser]);

    return (
        <SocketContext.Provider value={{ socket, onlineUsers }}>
            {children}
        </SocketContext.Provider>
    )
}