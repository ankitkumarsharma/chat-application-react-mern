import { useEffect, useState } from "react";
import useContactStore from "../store/useContactStore";
import { API_URL } from "../utils/app.constant";
import { toast } from "react-toastify";

const useMessages = ()=> {
    const [loading, setLoading] = useState(false);
    const { selectedContact, setSelectedContact, messages, setMessages } = useContactStore();

    const getMessages = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${API_URL.GET_MESSAGES}${selectedContact._id}`);
            const data = await response.json();
            if (data.error) {
                toast.error(data.error);
                // throw new Error(data.error);
            }
            setMessages(data);
        } catch (error) {
            toast.error(error.messages);
                // throw new Error(error.messages);
        } finally {
            setLoading(false);
        }
    }
    useEffect(()=>{
        if(selectedContact?._id) getMessages()
    }, [selectedContact?._id, setMessages]);

    return {
        loading,
        messages,
        getMessages
    }
};

export default useMessages;