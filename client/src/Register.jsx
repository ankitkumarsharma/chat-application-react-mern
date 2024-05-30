import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

const Register = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const {setLoggedName, setId} = useContext(UserContext)

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(name, password);
        const {data} = await axios.post('/signup', {name,password});
        setLoggedName(name);
        setId(data.id)
    }
    return (
        <>
            <div className="bg-red-50 h-screen flex items-center">
                <form className="w-96 mx-auto bg-blue-100 rounded p-3" action="">
                    <div className="flex mb-3 pt-3">
                        <label htmlFor="" className="flex-1 p-2">User Name</label>
                        <input type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className="flex-1 p-2 rounded" placeholder="Username" />
                    </div>
                    <div className="flex mb-3">
                        <label htmlFor="" className="flex-1 p-2">User Password</label>
                        <input type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="flex-1 p-2 rounded" placeholder="Password" />
                    </div>
                    <button onClick={handleSubmit} className="bg-red-500 text-white block w-full h-10 rounded" type="submit">Signup</button>
                    <div className="text-center mt-2">
                        Already a member?, <a href="">Login here</a>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register;