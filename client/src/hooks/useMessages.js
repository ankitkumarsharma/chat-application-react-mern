import { useEffect, useState } from "react";
import useContactStore from "../store/useContactStore";
import { API_URL, HEADERS, HTTP_METHODS } from "../utils/app.constant";
import { toast } from "react-toastify";
import { useAuthContext } from "../context/AuthContext";

const useMessages = ()=> {
    const [loading, setLoading] = useState(false);
    const { selectedContact, messages, setMessages } = useContactStore();
    const {authUser} = useAuthContext();

    const getMessages = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${API_URL.GET_MESSAGES}${selectedContact._id}`,{
                method: HTTP_METHODS.POST,
                headers: HEADERS,
                body: JSON.stringify({senderId: authUser._id})
            });
            const data = await response.json();
            if (data.error) {
                return toast.error(data.error);
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
        if(selectedContact?._id) getMessages();
        // setTimeout(()=>{
        //     if(selectedContact?._id) getMessages();
        // }, 3000);
    }, [selectedContact?._id, setMessages]);

    return {
        loading,
        messages,
        getMessages
    }
};

export default useMessages;