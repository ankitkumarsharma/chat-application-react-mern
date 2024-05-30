import { useContext } from "react";
import SignupAndLoginForm from "./SignupAndLoginForm";
import { UserContext } from "./UserContext";
import axios from "axios";


const Routes = ()=>{
    
const {loggedName, setId, setLoggedName} = useContext(UserContext);
const logout = async ()=>{
    await axios.post('/logout').then(()=>{
        setId(null);
        setLoggedName(null);
    })
}
    if(loggedName){
        return(
            <>
                <h1>Welcome {loggedName}</h1>
                <button onClick={logout}>Logout</button>
            </>
            
        )
    } else {
        return(
            <SignupAndLoginForm/>
        )
    }
}

export default Routes;