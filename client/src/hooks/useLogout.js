import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { ALERT_MESSAGES, API_URL, HEADERS, HTTP_METHODS } from "../utils/app.constant";

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();
    const logout = async () => {
        setLoading(true);
        try {
            const response = await fetch(API_URL.LOGOUT, {
                method: HTTP_METHODS.POST,
                headers: HEADERS,
            });
            const data = await response.json();
            if (data.error) {
                toast.error(data.error);
                // throw new Error(data.error);
            }
            sessionStorage.removeItem('chat-user');
            setAuthUser(null);
            toast.success(ALERT_MESSAGES.SUCCESS.LOGOUT_SUCCESS);
        } catch (error) {
            toast.error(error.message);
            // throw new Error(error.message);
        } finally {
            setLoading(false);
        }
    }
    return {
        logout,
        loading
    }
}

export default useLogout;