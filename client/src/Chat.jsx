import { useEffect, useState } from "react";

const Chat = () => {
    const [ws, setWs] = useState(null);
    const [onlinePeople, setOnlinePeople] = useState([]);
    useEffect(() => {
        const ws = new WebSocket('ws://localhost:5000');
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
        <li key={item.userId}>
            <div className="border-b border-gray-100 py-2">
                {item.name}
            </div>
        </li>
    ));

    return (
        <div className="flex h-screen">
            <div className="bg-red-100 w-1/3">
                <ul>
                    {people}
                </ul>
            </div>
            <div className="bg-red-300 w-2/3 flex flex-col">
                <div className="flex-grow">
                    Messages with contacts
                </div>
                <div className="flex p-2">
                    <input type="text" placeholder="Type your message here"
                        className="bg-white flex-grow border p-2" />
                    <button className="bg-red-500 text-white p-2">Send</button>
                </div>
            </div>
        </div>
    );
}

export default Chat;