import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { API_URL } from "../utils/app.constant";

const useContact = () => {
    const [loading, setLoading] = useState(false);
    const [contactList, setContactList] = useState([]);

    useEffect(() => {
        const getContactList = async () => {
            setLoading(true);
            try {
                const response = await fetch(API_URL.USERS);
                const data = await response.json();
                if (data.error) {
                    toast.error(data.error);
                    throw new Error(data.error);
                }
                setContactList(data);
            } catch (error) {
                toast.error(error.message);
                throw new Error(error.message);
            } finally {
                setLoading(false);
            }
        }
        getContactList();
    }, []);

    return {
        loading,
        contactList
    }

}

export default useContact;