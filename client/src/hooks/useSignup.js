import { useState } from "react";
import { toast } from 'react-toastify';

const useSignup = () => {
    const [loading, setLoading] = useState(false);

    const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
        const success = handleInputErrors({ fullName, username, password, confirmPassword, gender });
        if (!success) return;
        setLoading(true);
        try {
            const response = await fetch("http://localhost:5000/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ fullName, username, password, confirmPassword, gender })
            });

            const data = await response.json();
            console.log("API data >> ", data);
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
    return true;
}