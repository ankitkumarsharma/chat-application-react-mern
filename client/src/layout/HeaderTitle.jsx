const HeaderTitle = ({ title, span = "Chat App", size = "text-3xl" }) => {
    return (
        <h1 className={`font-bold text-center text-teal-800 mb-5 ${size}`}>
            {title}
            <span className="text-gray-600 font-semibold"> {span}</span>
        </h1>
    );
};

export default HeaderTitle;