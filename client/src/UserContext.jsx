import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({children})=>{
    const [loggedName, setLoggedName] = useState(null);
    const [id, setId] = useState(null);
    return (
        <UserContext.Provider value={{loggedName,setLoggedName,id,setId}}>
            {children}
        </UserContext.Provider>
    )
}