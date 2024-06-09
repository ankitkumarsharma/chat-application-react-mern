const HeaderTitle = ({ title, span="Chat App" }) => {
    return (
        <h1 className="text-3xl font-bold text-center text-teal-800 mb-5">
            {title}
            <span className="text-gray-600 font-semibold"> {span}</span>
        </h1>
    );
};

export default HeaderTitle;