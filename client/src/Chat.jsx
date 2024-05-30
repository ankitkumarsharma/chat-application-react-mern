import { useEffect } from "react";

const Chat = () => {
    useEffect(() => {
        new WebSocket('ws://localhost:5000')
    }, [])
    return (
        <div className="flex h-screen">
            <div className="bg-red-100 w-1/3">Contacts</div>
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