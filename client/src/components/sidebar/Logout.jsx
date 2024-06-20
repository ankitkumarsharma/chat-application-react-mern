import useLogout from "../../hooks/useLogout";

const Logout = () => {
    const { logout } = useLogout();
    return (
        <button title="Logout" onClick={logout} className="ml-2" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
            </svg>
        </button>
    );
};

export default Logout;
