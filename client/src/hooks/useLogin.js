import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { ALERT_MESSAGES, API_URL, HEADERS, HTTP_METHODS } from "../utils/app.constant";

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { authUser, setAuthUser } = useAuthContext();
    const login = async ({ username, password }) => {
        const success = handleInputErrors({ username, password });
        if (!success) return;
        setLoading(true);
        try {
            const response = await fetch(API_URL.LOGIN, {
                method: HTTP_METHODS.POST,
                headers: HEADERS,
                body: JSON.stringify({ username, password })
            });
            const data = await response.json();
            if (data.error) {
                toast.error(data.error);
                // throw new Error(data.error);
            }
            toast.success(ALERT_MESSAGES.SUCCESS.LOGIN_SUCCESS);
            sessionStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data);

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }

    }

    return { login, loading };
}

export default useLogin;

const handleInputErrors = ({ username, password }) => {
    if (!username || !password) {
        toast.error("Please fill in the required fields");
        return false;
    }
    if (password.length < 6) {
        toast.error("Password must be atleast 6 characters long!!!");
        return false;
    }
    return true;
}