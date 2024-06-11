import { Link } from 'react-router-dom';

const LoginOrSignupHint = ({ isLogin = true, onClick }) => {
    const button = isLogin ? "Login" : "Signup";
    const label = isLogin ? "Already" : "Don't";
    return (
        <div className="text-sm text-gray-600">
            {label} have an account? &nbsp;
            <button type="button" className="font-bold">
                <Link to={isLogin ? "/login" : "/signup"}>{button}</Link>
            </button>
        </div>
    )
}

export default LoginOrSignupHint;