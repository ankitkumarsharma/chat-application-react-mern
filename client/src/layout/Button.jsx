const Button = ({ name = 'Submit', type="button", onClick }) => {
    return (
        <button type={type} onClick={onClick} className="bg-teal-900 text-white block w-full h-10 rounded-full mt-5 mb-3">
            {name}
        </button>
    );
}

export default Button;