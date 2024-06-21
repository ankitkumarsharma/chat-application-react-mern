import { useState } from "react";
import Button from "../../layout/Button";
import Input from "../../layout/Input";
import useSendMessage from "../../hooks/useSendMessage";

const SendMessage = () => {
    const [message, setMessage] = useState("");
    const { loading, sendMessage } = useSendMessage()
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message) return;
        await sendMessage(message);
        setMessage("");
    }

    return (
        <div className="p-2">
            <form className="flex items-center h-9 w-full" >
                <div className="w-[80%]">
                    <Input value={message}  mb="mb-0" onChange={(e) => setMessage(e.target.value)} name="message" />
                </div>
                <div className="ml-2 w-[20%]">
                    <Button type="submit" onClick={handleSubmit} name="Send" />
                </div>
            </form>
        </div>
    );
};

export default SendMessage;