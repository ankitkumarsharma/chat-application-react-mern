import { useContext } from "react";
import SignupAndLoginForm from "./SignupAndLoginForm";
import { UserContext } from "./UserContext";
import axios from "axios";
import Chat from "./Chat";


const Routes = () => {

    const { loggedName, setId, setLoggedName } = useContext(UserContext);
    const logout = async () => {
        await axios.post('/logout').then(() => {
            setId(null);
            setLoggedName(null);
        })
    }
    if (loggedName) {
        return (
            <>
                <div className="bg-red-500 p-2 flex">
                    <h1 className="w-5/6 text-white font-medium">Welcome {loggedName}</h1>
                    <div className="w-1/6 text-right">
                        <button className="rounded bg-blue-900 text-white p-1 text-sm pl-3 pr-3" onClick={logout}>Logout</button>
                    </div>
                </div>
                <Chat />
            </>
        )
    } else {
        return <SignupAndLoginForm />
    }
}

export default Routes;