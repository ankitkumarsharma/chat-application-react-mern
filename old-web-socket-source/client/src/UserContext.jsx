import { createContext, useEffect, useState } from "react";
import axios from "axios"

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
    const [loggedName, setLoggedName] = useState(null);
    const [id, setId] = useState(null);
    useEffect(() => {
        axios.get('/profile').then(
            (res) => {
                setId(res.data.userId);
                setLoggedName(res.data.name);
            }, (err) => {
                setId(null);
                setLoggedName(null);
            })
    }, []);
    return (
        <UserContext.Provider value={{ loggedName, setLoggedName, id, setId }}>
            {children}
        </UserContext.Provider>
    )
}