const LoginOrSignupHint = ({ isLogin=true, onClick }) => {
    const button = isLogin ? "Login" : "Signup";
    const label = isLogin ? "Already" : "Don't";
    return (
        <div className="text-sm text-gray-600">
            {label} have an account? &nbsp;
            <button type="button" onClick={onClick} className="font-bold">
                {button}
            </button>
        </div>
    )
}

export default LoginOrSignupHint;