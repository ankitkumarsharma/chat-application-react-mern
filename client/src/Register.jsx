import { useState } from "react";

const Register = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, password);
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
                </form>
            </div>
        </>
    )
}

export default Register;