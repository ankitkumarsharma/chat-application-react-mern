import { useState } from "react";
import { toast } from 'react-toastify';
import { useAuthContext } from "../context/AuthContext";
import { ALERT_MESSAGES, API_URL, HEADERS, HTTP_METHODS } from "../utils/app.constant";

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
        const success = handleInputErrors({ fullName, username, password, confirmPassword, gender });
        if (!success) return;
        setLoading(true);
        try {
            const response = await fetch(API_URL.SIGNUP, {
                method: HTTP_METHODS.POST,
                headers: HEADERS,
                body: JSON.stringify({ fullName, username, password, confirmPassword, gender })
            });

            const data = await response.json();
            if (data.error) {
                return toast.error(data.error);
                // throw new Error(data.error);
            }
            toast.success(ALERT_MESSAGES.SUCCESS.SIGNUP_SUCCESS);
            sessionStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }

    }

    return {
        signup,
        loading
    }
}

export default useSignup;

const handleInputErrors = ({ fullName, username, password, confirmPassword, gender }) => {
    if (!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error("Please fill in the required fields");
        return false;
    }
    if (password !== confirmPassword) {
        toast.error("Password and Confirm Password not matched!!!");
        return false;
    }
    if (password.length < 6) {
        toast.error("Password must be atleast 6 characters long!!!");
        return false;
    }
    if (fullName.length > 10 || fullName.length < 3) {
        toast.error("Fullname must be min 3 char and max 10 characters long!!!");
        return false;
    }
    return true;
}