import { useContext, useEffect, useState } from "react";
import Avatar from "./Avatar";
import { UserContext } from "./UserContext";
import uniqBy from 'lodash/uniqBy';
import axios from "axios";

const Chat = () => {
    const [ws, setWs] = useState(null);
    const [onlinePeople, setOnlinePeople] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const { loggedName, id } = useContext(UserContext);
    const [newMessageText, setNewMessageText] = useState('');
    const [message, setMessage] = useState([]);
    useEffect(() => {
        // const ws = new WebSocket('ws://localhost:5000');
        const ws = new WebSocket('wss://chat-application-react-mern.onrender.com');
        setWs(ws);
        ws.addEventListener('message', handleMessage)
    }, []);

    useEffect(() => {
        if (selectedUser) {
            axios.get('/messages/' + selectedUser).then(res => {
                setMessage(res.data);
            })
        }
    }, [selectedUser])

    const handleMessage = (event) => {
        console.log(event.data);
        console.log(JSON.parse(event.data).online);
        const messageData = JSON.parse(event.data);
        if ('online' in messageData) {
            let messageArr = messageData.online;
            messageArr = messageArr.filter((value, index, self) =>
                index === self.findIndex((t) => (
                    t.userId === value.userId
                ))
            )
            setOnlinePeople(messageArr);
        } else if ('message' in messageData) {
            setMessage(prev => ([...prev, { _id: messageData.message.id, sender: messageData.sender, message: messageData.message.message, isOur: false }]));
            console.log(messageData);
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
        setMessage(prev => ([...prev, { _id: Date.now(), sender: id, message: newMessageText, isOur: true }]))
    }

    const messagesWithoutLoops = uniqBy(message, '_id');
    return (
        <div className="flex md:h-[400px] h-screen">
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
                <div className="overflow-x-auto">
                    {
                        selectedUser && messagesWithoutLoops.map((item, index) => (
                            <div>
                                {
                                    (item.sender === id) && (
                                        <div className="flex">
                                            <div className="w-[60%]"></div>
                                            <div key={index} className="bg-red-500 text-white p-2 text-right w-[40%] m-2 rounded-md">
                                                {item.message}
                                            </div>
                                        </div>
                                    )
                                }
                                {
                                    (item.sender !== id) && (
                                        <div className="flex">
                                            <div key={index} className="bg-gray-500 text-white p-2 text-left w-[40%] m-2 rounded-md">
                                                {item.message}
                                            </div>
                                            <div className="w-[60%]"></div>
                                        </div>

                                    )
                                }
                            </div>
                        ))
                    }
                </div>
                {selectedUser && (
                    <div className="p-2">
                        <form className="flex w-full" onSubmit={sendMessage}>
                            <input type="text" value={newMessageText} onChange={(e) => setNewMessageText(e.target.value)} placeholder="Type your message here"
                                className="bg-white flex-grow border p-2" />
                            <button type="submit" className="bg-red-500 text-white p-2">Send</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Chat;