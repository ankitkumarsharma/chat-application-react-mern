import { useContext, useEffect, useState } from "react";
import Avatar from "./Avatar";
import { UserContext } from "./UserContext";

const Chat = () => {
    const [ws, setWs] = useState(null);
    const [onlinePeople, setOnlinePeople] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const { loggedName, id } = useContext(UserContext);
    const { newMessageText, setNewMessageText } = useContext('');
    useEffect(() => {
        // const ws = new WebSocket('ws://localhost:5000');
        const ws = new WebSocket('ws://chat-nodejs-mongodb-ket5atbrj-ankitkumarsharma1s-projects.vercel.app');
        setWs(ws);
        ws.addEventListener('message', handleMessage)
    }, []);

    const handleMessage = (event) => {
        console.log(event.data);
        console.log(JSON.parse(event.data).online);
        const messageData = JSON.parse(event.data);
        if ('online' in messageData) {
            setOnlinePeople(messageData.online);
        }
    }

    const people = onlinePeople.map((item, index) => (
        id !== item.userId && (
            <li key={item.userId}>
                <div onClick={() => setSelectedUser(item.userId)} className={"border-b border-gray-100 py-2 flex items-center pl-2 " + (item.userId === selectedUser ? "bg-red-300" : "")}>
                    <Avatar name={item.name} />
                    {item.name}
                </div>
            </li>
        )
    ));

    const sendMessage = (event) => {
        event.preventDefault();
        ws.send(JSON.stringify({
            message: {
                senderId: id,
                receiverId: selectedUser,
                message: newMessageText
            }
        }));
        setNewMessageText('');
    }
    return (
        <div className="flex h-screen">
            <div className="bg-red-100 w-1/3">
                <ul>
                    {people}
                </ul>
            </div>
            <div className="bg-red-300 w-2/3 flex flex-col">
                <div className="flex-grow">
                    {!selectedUser && (
                        <div className="flex items-center justify-center h-full">
                            <div className="w-full text-center text-gray-500">Select a person to chat</div>
                        </div>
                    )}
                </div>
                <div className="flex p-2">
                    <form onSubmit={sendMessage}>
                        <input type="text" value={newMessageText} onChange={(e)=> setNewMessageText(e.target[0].value)} placeholder="Type your message here"
                            className="bg-white flex-grow border p-2" />
                        <button type="submit" className="bg-red-500 text-white p-2">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Chat;