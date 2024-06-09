const Avatar = ({ name = "Ankit" }) => {
    return (
        <div className="w-8 h-8 bg-red-500 rounded-full text-white font-bold mr-2 flex items-center">
            <div className="text-center w-full">
                {name.charAt(0).toUpperCase()}
            </div>
        </div>
    )
}

export default Avatar;