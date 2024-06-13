import { useState } from "react";
import { API_URL, HEADERS, HTTP_METHODS } from "../utils/app.constant";
import useContactStore from "../store/useContactStore";
import { toast } from "react-toastify";
import useMessages from "./useMessages";

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const {selectedContact, setSelectedContact, messages, setMessages} = useContactStore();
    const {getMessages} = useMessages();
    const sendMessage =  async (message) => {
        setLoading(true);
        try {
            const response = await fetch(`${API_URL.SEND_MESSAGE}${selectedContact._id}`, {
                method: HTTP_METHODS.POST,
                headers: HEADERS,
                body: JSON.stringify({message})
            });
            const data = await response.json();
            if (data.error) {
                toast.error(data.error);
                // throw new Error(data.error);
            }
            setMessages([...message, data]);
            getMessages();
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return {sendMessage, loading};
}

export default useSendMessage;