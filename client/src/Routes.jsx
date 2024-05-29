import { useContext } from "react";
import Register from "./Register";
import { UserContext } from "./UserContext";


const Routes = ()=>{
    
const {loggedName} = useContext(UserContext);
    console.log(loggedName);
    if(loggedName){
        return(
            <h1>Welcome {loggedName}</h1>
        )
    }
    return( 
        <Register/>
    )
}

export default Routes;