import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { API_URL } from "../utils/app.constant";
import useContactStore from "../store/useContactStore";

const useContact = () => {
    const [loading, setLoading] = useState(false);
    const [contactListApi, setContactListApi] = useState([]);
    const {setContactList} = useContactStore();

    useEffect(() => {
        const getContactList = async () => {
            setLoading(true);
            try {
                const response = await fetch(API_URL.USERS);
                const data = await response.json();
                if (data.error) {
                    return toast.error(data.error);
                    // throw new Error(data.error);
                }
                setContactList(data);
                setContactListApi(data);
            } catch (error) {
                toast.error(error.message);
                // throw new Error(error.message);
            } finally {
                setLoading(false);
            }
        }
        getContactList();
        // setTimeout(() => {
        //     getContactList();
        // }, 1000)
    }, []);

    return {
        loading,
        contactListApi
    }

}

export default useContact;