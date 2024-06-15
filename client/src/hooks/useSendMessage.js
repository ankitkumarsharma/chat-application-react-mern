import { useState } from "react";
import { API_URL, HEADERS, HTTP_METHODS } from "../utils/app.constant";
import useContactStore from "../store/useContactStore";
import { toast } from "react-toastify";
import useMessages from "./useMessages";
import { useAuthContext } from "../context/AuthContext";

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const {selectedContact, messages, setMessages} = useContactStore();
    const {getMessages} = useMessages();
    const {authUser} = useAuthContext()
    
    const sendMessage =  async (message) => {
        setLoading(true);
        try {
            const response = await fetch(`${API_URL.SEND_MESSAGE}${selectedContact._id}`, {
                method: HTTP_METHODS.POST,
                headers: HEADERS,
                body: JSON.stringify({message,senderId: authUser._id})
            });
            const data = await response.json();
            if (data.error) {
                return toast.error(data.message);
                // throw new Error(data.error);
            }
            setMessages([...messages, data]);
            getMessages();
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return {sendMessage, loading};
}

export default useSendMessage;