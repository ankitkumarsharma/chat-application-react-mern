import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

const SignupAndLoginForm = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const { setLoggedName, setId } = useContext(UserContext);
    const [isLoginOrSignup, setIsLoginOrSignup] = useState('signup')

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(name, password);
        const url = isLoginOrSignup === 'signup' ? 'signup':'login';
        const { data } = await axios.post(url, { name, password });
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
                    <button onClick={handleSubmit} className="bg-red-500 text-white block w-full h-10 rounded" type="submit">
                        {isLoginOrSignup === 'signup' ? 'Signup' : 'Login'}
                    </button>
                    <div className="text-center mt-2">
                        {isLoginOrSignup === 'signup' && (
                            <div>
                                Already a member?,
                                <button type="button" className="font-bold" onClick={() => setIsLoginOrSignup('login')}>
                                    Login
                                </button>
                            </div>
                        )}

                        {isLoginOrSignup === 'login' && (
                            <div>
                                Don't have an account?,
                                <button type="button" className="font-bold" onClick={() => setIsLoginOrSignup('signup')}>
                                    Signup
                                </button>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignupAndLoginForm;